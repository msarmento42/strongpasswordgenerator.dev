import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function GuideUpgrading() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <div className="mb-8">
          <Link href="/guides" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Guides
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            How to Upgrade All Your Old Passwords Safely
          </h1>
        </div>

        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <section>
            <p className="lead">
              Many people know they should improve their passwords but feel overwhelmed about where to start. This guide gives you a simple, 
              step-by-step plan you can complete over a few short sessions instead of trying to fix everything in one day.
            </p>
          </section>

          <section>
            <h2>Step 1: Make a Short Priority List</h2>
            <p>
              Start by listing your most important accounts:</p>
            <ul>
              <li>Primary email address.</li>
              <li>Banking and investment accounts.</li>
              <li>Cloud storage and photo backups.</li>
              <li>Main social media accounts.</li>
              <li>Work accounts, if applicable.</li>
            </ul>
            <p>
              These are the accounts to protect first. Compromise here can cause the most damage.
            </p>
          </section>

          <section>
            <h2>Step 2: Set Up a Password Manager</h2>
            <p>
              If you are not using one yet, follow our <Link href="/guides/password-managers" className="text-primary hover:underline">Password Managers guide</Link> to choose and set up a manager. 
              This will make the whole process smoother and help you avoid losing access to accounts as you update them.
            </p>
          </section>

          <section>
            <h2>Step 3: Update One Account at a Time</h2>
            <ol>
              <li>Log in to one account from your priority list.</li>
              <li>Go to the security or password settings page.</li>
              <li>Use the <Link href="/" className="text-primary hover:underline">Secure Password Generator</Link> or <Link href="/passphrases" className="text-primary hover:underline">Passphrase Generator</Link> to create a new, strong password.</li>
              <li>Save the new password in your password manager.</li>
              <li>Turn on multi-factor authentication if the site offers it.</li>
            </ol>
            <p>
              Mark that account as “upgraded” in your list. Then move on to the next one when you have time.
            </p>
          </section>

          <section>
            <h2>Step 4: Sweep Through Less Critical Accounts</h2>
            <p>
              After your top accounts are secured, look through your email for “new login” or “welcome” messages. 
              This can help you discover older accounts you may have forgotten. For each one you still use:
            </p>
            <ul>
              <li>Log in and save the account in your password manager.</li>
              <li>Change the password to a strong, unique one.</li>
              <li>Close any accounts you no longer need.</li>
            </ul>
          </section>

          <section>
            <h2>Step 5: Maintain Your New System</h2>
            <p>
              Once you have done the initial cleanup, maintenance is easy:</p>
            <ul>
              <li>Always let your manager or our generator create new passwords.</li>
              <li>Immediately change passwords if you hear about a breach affecting a service you use.</li>
              <li>Review your password manager’s security dashboard occasionally if it has one.</li>
            </ul>
            <p>
              By taking these steps, you move from a patchwork of reused passwords to a consistent, strong system.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}