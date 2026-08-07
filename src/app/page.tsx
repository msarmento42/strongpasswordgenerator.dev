import type { Metadata } from 'next';
import PasswordGeneratorClient from './PasswordGeneratorClient';

export const metadata: Metadata = {
  title: 'Strong Password Generator — Private, Secure, and Free',
  description: 'Generate strong, unique passwords privately in your browser with a free password generator, passphrase tool, strength checker, and security checklist.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/',
  },
  openGraph: {
    type: 'website',
    url: 'https://strongpasswordgenerator.dev/',
    siteName: 'Strong Password Generator',
    title: 'Strong Password Generator — Private, Secure, and Free',
    description: 'Generate strong, unique passwords privately in your browser with a free password generator, passphrase tool, strength checker, and security checklist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strong Password Generator — Private, Secure, and Free',
    description: 'Generate strong, unique passwords privately in your browser with a free password generator, passphrase tool, strength checker, and security checklist.',
  },
};

export default function Home() {
  return (
    <>
      <section className="border-b border-indigo-100 bg-white px-6 py-10 text-slate-700">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Private password security</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Generate strong, unique passwords locally</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            StrongPasswordGenerator.dev helps you create passwords and passphrases without an account. Generation uses your browser&apos;s Web Crypto API, so the generated value is not sent to a server or saved in a password history.
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <li>• Custom length and character controls</li>
            <li>• Passphrase generator and strength checker</li>
            <li>• Practical MFA and recovery guidance</li>
            <li>• Security checklist for the next step</li>
          </ul>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Use the interactive generator below, then follow the <a href="/password-safety-checklist" className="font-semibold text-indigo-600 underline">password safety checklist</a> to secure recovery codes, two-factor authentication, and breach cleanup. For tool comparisons, see <a href="/recommended-tools" className="font-semibold text-indigo-600 underline">recommended security tools</a>.
          </p>
        </div>
      </section>
      <PasswordGeneratorClient />
    </>
  );
}
