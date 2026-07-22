import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About | Strong Password Generator',
  description: 'Learn about StrongPasswordGenerator.dev — a free tool to generate cryptographically secure passwords and learn password security best practices.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://strongpasswordgenerator.dev/about',
    siteName: 'Strong Password Generator',
    title: 'About | Strong Password Generator',
    description: 'Learn about StrongPasswordGenerator.dev — a free tool to generate cryptographically secure passwords and learn password security best practices.',
    images: [
      {
        url: 'https://strongpasswordgenerator.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strong Password Generator - About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Strong Password Generator',
    description: 'Learn about StrongPasswordGenerator.dev — a free tool to generate cryptographically secure passwords and learn password security best practices.',
    images: ['https://strongpasswordgenerator.dev/og-image.png'],
  },
};

export default function AboutPage() {
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
        "name": "About",
        "item": "https://strongpasswordgenerator.dev/about"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Strong Password Generator truly free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Strong Password Generator is completely free to use. We aim to provide a valuable security tool without any cost to our users."
        }
      },
      {
        "@type": "Question",
        "name": "How does Strong Password Generator ensure my privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All password generation happens directly in your browser using the Web Crypto API. We never transmit, store, or log your generated passwords. Your data stays on your device."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trust the randomness of the generated passwords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use crypto.getRandomValues(), a cryptographically secure pseudorandom number generator (CSPRNG) provided by your browser, which is the industry standard for secure applications."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I use a strong password generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using a strong password generator helps you create unique, complex passwords that are difficult for attackers to guess or crack, significantly improving your online security."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Strong Password Generator</span>
          </Link>
          <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← Generator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">About Strong Password Generator</h1>
          <p className="text-slate-600 mb-4 leading-relaxed">
            StrongPasswordGenerator.dev is a free, privacy-first password security tool. We built it because most password generators are either too simple, ad-riddled, or — worst of all — send your generated passwords to a server. Ours never does.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Every password generated on this site is created entirely in your browser using the Web Crypto API (<code className="bg-slate-100 px-1 rounded text-indigo-600">crypto.getRandomValues()</code>). Nothing is transmitted. Nothing is logged. We have no way to see the passwords you generate even if we wanted to.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Alongside the generator, we publish a free security blog covering password managers, two-factor authentication, VPNs, and practical security advice for everyday users.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-2">What We Publish</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We focus on password security, account recovery, phishing prevention, password managers, VPNs, and identity protection for normal users, not enterprise security teams.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Who It's For</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              The site is built for people who want practical steps they can actually follow: stronger passwords, safer defaults, and better decisions after breaches or scams.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-2">How To Reach Us</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Readers can send corrections, bug reports, or partnership questions through our <Link href="/contact" className="text-indigo-600 hover:underline">contact page</Link>. We review messages manually.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">How the Generator Works</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>Passwords are generated using <strong>cryptographically secure randomness</strong> from the browser's built-in <code className="bg-slate-100 px-1 rounded text-indigo-600">crypto.getRandomValues()</code> API — the same standard used by secure applications worldwide.</p>
            <p>Strength is calculated using <strong>Shannon entropy</strong>: the number of bits of randomness in your password given its character set and length. Crack time estimates assume a dedicated attacker running 10 billion guesses per second.</p>
            <p>Password history is stored only in your browser's <code className="bg-slate-100 px-1 rounded text-indigo-600">localStorage</code> — it never leaves your device and is cleared when you clear browser data.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Our Recommendations Philosophy</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Our <Link href="/recommended-tools" className="text-indigo-600 hover:underline">Recommended Tools</Link> page lists products we genuinely endorse. Some links are affiliate links — we earn a small commission if you sign up, at no cost to you. This helps keep the site free.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We only recommend tools we'd use ourselves. Affiliate relationships never influence which tools we list or how we describe them. Read our <Link href="/editorial-policy" className="text-indigo-600 hover:underline">editorial policy</Link> for the full review and disclosure process.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">Is Strong Password Generator truly free?</h3>
              <p>Yes, Strong Password Generator is completely free to use. We aim to provide a valuable security tool without any cost to our users.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">How does Strong Password Generator ensure my privacy?</h3>
              <p>All password generation happens directly in your browser using the Web Crypto API. We never transmit, store, or log your generated passwords. Your data stays on your device.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">Can I trust the randomness of the generated passwords?</h3>
              <p>Absolutely. We use <code className="bg-slate-100 px-1 rounded text-indigo-600">crypto.getRandomValues()</code>, a cryptographically secure pseudorandom number generator (CSPRNG) provided by your browser, which is the industry standard for secure applications.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">Why should I use a strong password generator?</h3>
              <p>Using a strong password generator helps you create unique, complex passwords that are difficult for attackers to guess or crack, significantly improving your online security.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">What This Site Is Not</h2>
          <div className="space-y-3 text-slate-600 leading-relaxed">
            <p>Strong Password Generator does not provide legal, financial, or incident-response services. Our articles are educational and are meant to help you ask better questions and take safer first steps.</p>
            <p>If you're dealing with active fraud, tax identity theft, or an account compromise at work, contact the relevant institution or provider directly before relying on any general guide.</p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link href="/" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition">Generate a Password</Link>
          <Link href="/blog" className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-50 transition">Security Blog</Link>
          <Link href="/contact" className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-50 transition">Contact Us</Link>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-4 sm:px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/recommended-tools" className="hover:text-indigo-600">Tools</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
          <Link href="/editorial-policy" className="hover:text-indigo-600">Editorial Policy</Link>
          <Link href="/terms" className="hover:text-indigo-600">Terms</Link>
        </div>
        <p> 2026 StrongPasswordGenerator.dev</p>
      </footer>

      <Script
        id="breadcrumb-jsonld-ab"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-jsonld-ab"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
