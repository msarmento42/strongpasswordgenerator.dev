import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy | Strong Password Generator',
  description: 'How StrongPasswordGenerator.dev researches, reviews, and monetizes password security guides and tool recommendations.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SecurePass
          </Link>
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Security Blog</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">Trust and transparency</p>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Editorial Policy</h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            StrongPasswordGenerator.dev publishes practical password security guidance for everyday users. Our goal is to help readers make safer account-security decisions without hype, fear tactics, or unnecessary complexity.
          </p>

          <div className="space-y-7 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Research Articles</h2>
              <p>
                Security guides are based on vendor documentation, public security guidance, breach-response best practices, and hands-on evaluation where applicable. We prioritize advice that a reader can apply immediately: unique passwords, password managers, two-factor authentication, passkeys, account recovery, and breach monitoring.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Review Recommendations</h2>
              <p>
                Tool recommendations consider security model, reputation, pricing, ease of use, cross-device support, export options, and fit for the reader&apos;s situation. We avoid recommending tools solely because they pay commissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Affiliate Disclosure</h2>
              <p>
                Some outbound links are affiliate links. If you buy through those links, we may earn a commission at no extra cost to you. Affiliate relationships help keep the generator and guides free, but they do not determine whether a product is included or how it is described.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Corrections and Updates</h2>
              <p>
                Security advice changes as products, threats, and platform defaults change. If you spot an outdated claim, broken link, or factual issue, please contact us so we can review and update the page.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
