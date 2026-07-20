import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Strong Password Generator',
  description: 'Terms of use for StrongPasswordGenerator.dev, including acceptable use, informational disclaimers, and affiliate transparency.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/terms',
  },
  openGraph: {
    title: 'Terms of Use | Strong Password Generator',
    description: 'Terms of use for StrongPasswordGenerator.dev, including acceptable use, informational disclaimers, and affiliate transparency.',
    url: 'https://strongpasswordgenerator.dev/terms',
    siteName: 'Strong Password Generator',
    type: 'website',
    images: [{ url: '/og-image.svg' }],
  },
};

export default function TermsPage() {
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
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SecurePass</span>
          </Link>
          <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← Generator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Terms of Use</h1>
          <p className="text-sm text-slate-400 mb-8">Last updated: July 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Acceptance of These Terms</h2>
              <p>
                By using StrongPasswordGenerator.dev, you agree to these terms of use. If you do not agree,
                please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Educational Use Only</h2>
              <p>
                Our password generator, reviews, buying guides, and security articles are provided for general
                educational and informational purposes. They do not replace legal advice, financial advice,
                professional incident response, or support from the relevant institution involved in a breach,
                fraud event, or account takeover.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Tool Usage and Security</h2>
              <p>
                The password generator runs locally in your browser. You are responsible for how you use the
                generated passwords, where you store them, and whether you enable additional protections such
                as two-factor authentication, passkeys, or password-manager vault security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">No Warranty</h2>
              <p>
                We provide the site on an “as is” and “as available” basis without warranties of any kind.
                We do not guarantee uninterrupted availability, absolute accuracy, or that every article,
                product claim, or vendor detail will always remain current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Affiliate Relationships</h2>
              <p>
                Some outbound links are affiliate links. If you buy through those links, we may earn a
                commission at no additional cost to you. These relationships help support the site but do
                not determine whether a product is included or how it is described. See our{' '}
                <Link href="/editorial-policy" className="text-indigo-600 hover:underline">editorial policy</Link>{' '}
                and <Link href="/privacy" className="text-indigo-600 hover:underline">privacy policy</Link> for more detail.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">External Links and Third Parties</h2>
              <p>
                We link to third-party services, tools, and vendor websites. We are not responsible for the
                content, availability, pricing, claims, or privacy practices of those external sites. Review
                their own terms and policies before relying on them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Acceptable Use</h2>
              <p className="mb-3">You agree not to misuse the site, including by attempting to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>interfere with the site&apos;s normal operation or availability</li>
                <li>scrape or automate access in a way that harms the service</li>
                <li>use the site for unlawful, deceptive, or abusive activity</li>
                <li>misrepresent our content as professional legal, financial, or security-response advice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, StrongPasswordGenerator.dev is not liable for any
                indirect, incidental, or consequential damages arising from use of the site, reliance on
                the content, or decisions made based on our guides or recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Updates to These Terms</h2>
              <p>
                We may update these terms as the site evolves. When changes are material, we will update the
                date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Contact</h2>
              <p>
                Questions about these terms? Visit our <Link href="/contact" className="text-indigo-600 hover:underline">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3 flex-wrap">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/recommended-tools" className="hover:text-indigo-600">Tools</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
          <Link href="/editorial-policy" className="hover:text-indigo-600">Editorial Policy</Link>
          <Link href="/terms" className="hover:text-indigo-600">Terms</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev</p>
      </footer>
    </div>
  );
}
