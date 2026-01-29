import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function GuideMFA() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <div className="mb-8">
          <Link href="/guides" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Guides
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Multi-Factor Authentication (MFA) for Normal People
          </h1>
        </div>

        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <section>
            <p className="lead">
              Multi-factor authentication adds an extra step to your login process, usually in the form of a one-time code or approval request. 
              It may add a few seconds to each login, but it can block many attacks even if someone learns your password.
            </p>
          </section>

          <section>
            <h2>What Is Multi-Factor Authentication?</h2>
            <p>
              Traditionally, logins relied on something you <em>know</em> (your password). MFA adds a second factor, such as:
            </p>
            <ul>
              <li>Something you <em>have</em> (a phone app, hardware key).</li>
              <li>Something you <em>are</em> (fingerprint or face recognition).</li>
            </ul>
            <p>
              To sign in, you need both your password and the second factor. This makes it much harder for an attacker who only has your password.
            </p>
          </section>

          <section>
            <h2>Common Types of MFA</h2>
            <ul>
              <li><strong>Authenticator apps:</strong> Apps like those provided by many services generate time-based one-time codes. These are generally more secure than SMS codes.</li>
              <li><strong>SMS codes:</strong> A code arrives by text message. Better than no MFA, but vulnerable to SIM-swap attacks.</li>
              <li><strong>Push notifications:</strong> Your phone shows a prompt asking if you are trying to sign in. You approve or deny the request.</li>
              <li><strong>Hardware security keys:</strong> Physical keys you plug into a USB port or tap with NFC. Very strong protection, often used for high-value accounts.</li>
            </ul>
          </section>

          <section>
            <h2>Where to Enable MFA First</h2>
            <p>
              If you are just getting started, enable MFA on:</p>
            <ul>
              <li>Your primary email account.</li>
              <li>Your password manager.</li>
              <li>Banking and financial accounts.</li>
              <li>Important social media and cloud storage accounts.</li>
            </ul>
            <p>
              Many services include MFA options under “Security” or “Account Settings.”
            </p>
          </section>

          <section>
            <h2>Tips for Using MFA Smoothly</h2>
            <ul>
              <li>Whenever possible, prefer authenticator apps or hardware keys over SMS codes.</li>
              <li>Store backup codes in a safe place separate from your device.</li>
              <li>Do not approve login prompts you did not initiate.</li>
              <li>If you lose a device, update your MFA settings for important accounts right away.</li>
            </ul>
            <p>
              Combined with strong, unique passwords, MFA dramatically reduces the chances of someone taking over your accounts.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}