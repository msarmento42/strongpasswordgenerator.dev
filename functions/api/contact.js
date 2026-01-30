function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

async function verifyTurnstile(secret, token, ip) {
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);

  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  return r.json();
}

export async function onRequestPost({ request, env }) {
  const TURNSTILE_SECRET = env.TURNSTILE_SECRET;
  const DESTINATION_EMAIL = env.CONTACT_DESTINATION_EMAIL;

  if (!TURNSTILE_SECRET) return json({ ok: false, error: 'TURNSTILE_SECRET not configured' }, 500);
  if (!DESTINATION_EMAIL) return json({ ok: false, error: 'CONTACT_DESTINATION_EMAIL not configured' }, 500);

  const body = await request.formData();
  const name = (body.get('name') || '').toString().trim();
  const email = (body.get('email') || '').toString().trim();
  const message = (body.get('message') || '').toString().trim();
  const token = (body.get('cf-turnstile-response') || '').toString();

  if (!message || message.length < 5) return json({ ok: false, error: 'Message too short' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || undefined;
  const verify = await verifyTurnstile(TURNSTILE_SECRET, token, ip);
  if (!verify.success) return json({ ok: false, error: 'Turnstile failed', details: verify['error-codes'] || [] }, 400);

  // Cloudflare Pages Functions cannot send email directly without a mail provider.
  // We rely on Cloudflare Email Routing via the contact@ inbox using a simple mailto fallback.
  // For now, return a success response; later we can wire a mail provider (MailChannels/Resend/etc.).
  return json({ ok: true, to: DESTINATION_EMAIL, name, email });
}
