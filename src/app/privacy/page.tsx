import Link from 'next/link';
import Head from 'next/head';

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
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <meta property="og:title" content="Privacy Policy | Strong Password Generator" />
        <meta property="og:description" content="Privacy policy for StrongPasswordGenerator.dev — we collect minimal data and never see your generated passwords." />
        <meta property="og:url" content="https://strongpasswordgenerator.dev/privacy" />
        <meta property="og:type" content="website" />
      </Head>
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
                  text: 'No, we never see the passwords you generate. Password generation happens entirely in your browser, using your browser\'s crypto.getRandomValues() API. Generated passwords are never transmitted to our servers, never logged, and never stored anywhere except optionally in your own browser\'s localStorage.',
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
                  text: 'We use browser localStorage to save your password generator preferences (length, character options) and password history between sessions. This data stays on your device and is never sent to us. We may also use cookies for analytics purposes, which you can disable in your browser settings.',
                },
              },
            ],
          }),
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
                <p>We never see the passwords you generate. Password generation happens entirely in your browser. We collect standard analytics (page views, referrers) but no personally identifiable information. Password history is stored locally on your device only.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                <li><strong>Your Passwords are Private:</strong> All password generation happens directly in your browser and is never sent to our servers.</li>
                <li><strong>Minimal Data Collection:</strong> We collect non-identifying analytics data (like page views) but no personal information unless you contact us directly.</li>
                <li><strong>Local Storage for Preferences:</strong> Your password history and generator settings are saved only on your device using browser local storage.</li>
                <li><strong>Transparency on Third-Parties:</strong> We use services like Google Analytics and AdSense, and some links are affiliates, all disclosed in detail.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Password Generation</h2>
              <p>All passwords are generated client-side using your browser&apos;s <code className="bg-slate-100 px-1 rounded text-indigo-700">crypto.getRandomValues()</code> API. Generated passwords are never transmitted to our servers, never logged, and never stored anywhere except optionally in your own browser&apos;s localStorage.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Information We Collect</h2>
              <p className="mb-3">We collect minimal, non-identifying data:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Page views and general site analytics (via Google Analytics or hosting-provider analytics)</li>
                <li>Referring URLs and general geographic region (country-level)</li>
                <li>Browser type and device type (for compatibility)</li>
                <li>Affiliate and outbound link click events, reviewed in aggregate</li>
              </ul>
              <p className="mt-3 text-sm">We do not collect names, email addresses, or any personally identifiable information unless you choose to contact us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Cookies & Local Storage</h2>
              <p>We use browser localStorage to save your password generator preferences (length, character options) and password history between sessions. This data stays on your device and is never sent to us. You can clear it at any time by clearing your browser&apos;s site data.</p>
              <p className="mt-2">We may use cookies for analytics purposes. You can disable cookies in your browser settings.</p>
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
        </div>
        <p>© 2026 StrongPasswordGenerator.dev</p>
      </footer>
    </div>
  );
}
