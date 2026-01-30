# Pages Functions

This site uses Cloudflare Pages Functions for:
- `functions/_middleware.js`: redirect `www.` → apex
- `functions/api/contact.js`: contact form handler (Turnstile + basic validation)

Required environment variables (set in Cloudflare Pages project settings):
- `TURNSTILE_SECRET` (Turnstile secret key)
- `CONTACT_DESTINATION_EMAIL` (where contact messages should route; currently used for response messaging)

Also update `contact.html` to include your Turnstile site key.
