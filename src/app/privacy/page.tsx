import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Strong Password Generator',
  description: 'Privacy policy for StrongPasswordGenerator.dev — we collect minimal data and never see your generated passwords.',
  openGraph: {
    title: 'Privacy Policy | Strong Password Generator',
    description: 'Privacy policy for StrongPasswordGenerator.dev — we collect minimal data and never see your generated passwords.',
    url: 'https://strongpasswordgenerator.dev/privacy',
    siteName: 'Strong Password Generator',
    type: 'website',
    images: [{ url: '/og-image.svg' }],
  },
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Strong Password Generator',
    description: 'Privacy policy for StrongPasswordGenerator.dev — we collect minimal data and never see your generated passwords.',
  },
};

export default function PrivacyPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you see the passwords I generate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Password generation happens entirely in your browser using the Web Crypto API. Generated passwords are not transmitted to us, logged, or saved in localStorage. The site removes legacy passwordHistory data when the generator loads.',
                },
              },
              {
                '@type': 'Question',
                name: 'What information do you collect?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We collect minimal, non-identifying data such as page views, referring URLs, general geographic region (country-level), browser type, device type, and affiliate/outbound link click events, reviewed in aggregate. We do not collect names, email addresses, or any personally identifiable information unless you choose to contact us directly.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you use cookies and local storage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use browser localStorage only to save generator preferences such as length and character options. Generated passwords are not stored. Analytics and advertising providers may use cookies, subject to their policies and your browser controls.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Privacy Policy",
                "item": "https://strongpasswordgenerator.dev/privacy"
              }
            ]
          })
        }}
      />

      <main className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mb-8">Last updated: July 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">The Short Version</h2>
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-sm">
                <p>We never see the passwords you generate. Generation happens entirely in your browser, and generated values are not persisted. We collect aggregate site and funnel analytics, but those events never include generated or checked passwords.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                <li><strong>Your Passwords are Private:</strong> All password generation happens directly in your browser and is never sent to our servers.</li>
                <li><strong>Minimal Data Collection:</strong> We collect non-identifying analytics data (like page views) but no personal information unless you contact us directly.</li>
                <li><strong>Local Storage for Preferences:</strong> Generator settings are saved on your device. Generated passwords are not saved, and legacy password-history data is removed when the generator loads.</li>
                <li><strong>Transparency on Third-Parties:</strong> We use services like Google Analytics and AdSense, and some links are affiliates, all disclosed in detail.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Password Generation</h2>
              <p>All passwords are generated client-side using your browser&apos;s <code className="bg-slate-100 px-1 rounded text-indigo-700">crypto.getRandomValues()</code> API. Generated passwords are not transmitted to us, logged, or saved in localStorage. When the generator loads, it removes any <code className="bg-slate-100 px-1 rounded text-indigo-700">passwordHistory</code> data created by an earlier version.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Information We Collect</h2>
              <p className="mb-3">We collect minimal, non-identifying data:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Page views and general site analytics (via Google Analytics or hosting-provider analytics)</li>
                <li>Referring URLs and general geographic region (country-level)</li>
                <li>Browser type and device type (for compatibility)</li>
                <li>Generator success, copy, regenerate, recommendation view, affiliate click, and newsletter interaction events, with anonymous page, placement, page-intent, generator-type, or affiliate-partner categories where relevant</li>
              </ul>
              <p className="mt-3 text-sm">We do not collect names, email addresses, or any personally identifiable information unless you choose to contact us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Cookies & Local Storage</h2>
              <p>We use browser localStorage to save only password generator preferences such as length and character options. We do not save generated passwords or a password history. You can remove preferences by clearing this site&apos;s browser data.</p>
              <p className="mt-2">We may use cookies for analytics purposes. You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Funnel Analytics</h2>
              <p>We measure whether a generator succeeds and whether visitors copy, regenerate, view a recommendation, follow an affiliate link, or interact with the newsletter form. Event payloads are limited to the action, page, placement, and—when relevant—anonymous categories for page intent, generator type, or affiliate partner. The event contract rejects generated passwords, passphrases, password-checker inputs, entropy inputs, email addresses, and other unapproved fields.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Advertising</h2>
              <p>This site uses Google AdSense to display ads. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-indigo-600 hover:underline" rel="noopener">Google&apos;s Ads Settings</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Contact and Email</h2>
              <p>If you contact us directly, we receive the information you include in your message so we can reply and maintain a record of the conversation. We do not sell contact submissions or use them for unrelated marketing.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Affiliate Links</h2>
              <p>Some links on this site — particularly on the <Link href="/recommended-tools" className="text-indigo-600 hover:underline">Recommended Tools</Link> page — are affiliate links. We earn a small commission if you purchase through these links, at no additional cost to you. These relationships do not influence our editorial recommendations. See our <Link href="/editorial-policy" className="text-indigo-600 hover:underline">editorial policy</Link> for more detail.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Third-Party Services</h2>
              <p>We use the following third-party services, each with their own privacy policies:</p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Vercel (hosting and deployment)</li>
                <li>Google Analytics (traffic and aggregate click analytics)</li>
                <li>Google AdSense (advertising)</li>
                <li>Commission Junction / CJ Affiliate (affiliate tracking)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Contact</h2>
              <p>Questions about this privacy policy? <Link href="/contact" className="text-indigo-600 hover:underline">Contact us here</Link>.</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/recommended-tools" className="hover:text-indigo-600">Tools</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          <Link href="/terms" className="hover:text-indigo-600">Terms</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev</p>
      </footer>
    </div>
  );
}
