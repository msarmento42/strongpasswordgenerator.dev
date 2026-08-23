import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import NordPassInContentCallout from '../components/NordPassInContentCallout';

export const metadata: Metadata = {
  title: 'Password Safety Checklist | Strong Password Generator',
  description: 'A practical password safety checklist: generate strong passwords, store them safely, turn on 2FA, and recover after a breach.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/password-safety-checklist',
  },
  openGraph: {
    title: 'Password Safety Checklist | Strong Password Generator',
    description: 'A practical password safety checklist for everyday account security.',
    url: 'https://strongpasswordgenerator.dev/password-safety-checklist',
    siteName: 'Strong Password Generator',
    type: 'article',
    images: [{ url: '/og-image.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Password Safety Checklist | Strong Password Generator',
    description: 'A practical password safety checklist for everyday account security.',
    images: ['/og-image.svg'],
  },
};

const checklist = [
  {
    title: 'Use a unique password for every important account',
    body: 'Reuse is the biggest everyday risk. If one site is breached, attackers try the same email and password everywhere else.',
  },
  {
    title: 'Make generated passwords long enough',
    body: 'For most accounts, use at least 16 characters. For financial, email, cloud storage, and admin accounts, use 20 or more.',
  },
  {
    title: 'Store passwords in a password manager',
    body: 'A password manager lets you use strong, unique passwords without memorizing them. It also reduces the temptation to reuse easy passwords.',
  },
  {
    title: 'Turn on two-factor authentication',
    body: 'Use an authenticator app or hardware security key when possible. SMS is better than nothing, but app-based 2FA is usually stronger.',
  },
  {
    title: 'Replace breached or reused passwords first',
    body: 'Do not rotate everything randomly. Prioritize email, banking, password manager, cloud storage, social accounts, and any reused passwords.',
  },
  {
    title: 'Keep recovery options current',
    body: 'Check backup email addresses, phone numbers, recovery codes, and trusted devices before you urgently need them.',
  },
];

export default function PasswordSafetyChecklistPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://strongpasswordgenerator.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Password Safety Checklist",
        "item": "https://strongpasswordgenerator.dev/password-safety-checklist"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Strong Password Generator
          </Link>
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Security Blog</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">Account security basics</p>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Password Safety Checklist</h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            A strong password generator is useful, but it is only one part of account security. Use this checklist to create better passwords, store them safely, and decide what to fix first after a breach or security scare.
          </p>

          <div className="space-y-4">
            {checklist.map((item, index) => (
              <section key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h2>
                    <p className="text-slate-600 leading-relaxed m-0">{item.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8">
            <AffiliateDisclosure />
            <NordPassInContentCallout />
          </div>

          <section className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
            <h2 className="text-xl font-bold text-slate-800 mb-2">What to do after a breach</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              If a service tells you your account was affected, change that password immediately and check whether you reused it elsewhere. Then turn on 2FA and review recent account activity.
            </p>
            <p className="text-slate-600 leading-relaxed m-0">
              Start by generating a fresh password on the <Link href="/" className="text-indigo-600 hover:underline">main generator</Link>, then store it in your password manager before logging out of the breached account.
            </p>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/blog/how-to-create-strong-password" className="rounded-2xl border border-slate-200 p-5 hover:border-indigo-300 transition">
              <h2 className="text-lg font-bold text-slate-800 mb-1">Learn the basics</h2>
              <p className="text-sm text-slate-600 leading-relaxed">Read the guide to creating strong passwords that are hard to crack and easy to manage.</p>
            </Link>
            <Link href="/recommended-tools" className="rounded-2xl border border-slate-200 p-5 hover:border-indigo-300 transition">
              <h2 className="text-lg font-bold text-slate-800 mb-1">Choose safer tools</h2>
              <p className="text-sm text-slate-600 leading-relaxed">Compare password managers, VPNs, and account-security tools without chasing hype.</p>
            </Link>
          </section>
        </article>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3 flex-wrap">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
          <Link href="/editorial-policy" className="hover:text-indigo-600">Editorial Policy</Link>
        </div>
        <p>&copy; 2026 StrongPasswordGenerator.dev</p>
      </footer>
      <Script
        id="breadcrumb-jsonld-checklist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
