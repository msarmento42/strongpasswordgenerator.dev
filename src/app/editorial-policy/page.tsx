import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Editorial Policy | Strong Password Generator',
  description: 'How StrongPasswordGenerator.dev researches, reviews, and monetizes password security guides and tool recommendations.',
  alternates: {
    canonical: new URL('https://strongpasswordgenerator.dev/editorial-policy'),
  },
  openGraph: {
    title: 'Editorial Policy | Strong Password Generator',
    description: 'How StrongPasswordGenerator.dev researches, reviews, and monetizes password security guides and tool recommendations.',
    url: 'https://strongpasswordgenerator.dev/editorial-policy',
    siteName: 'Strong Password Generator',
    type: 'website',
    images: [{ url: '/og-image.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Policy | Strong Password Generator',
    description: 'How StrongPasswordGenerator.dev researches, reviews, and monetizes password security guides and tool recommendations.',
    images: ['/og-image.svg'],
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does StrongPasswordGenerator.dev research articles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Security guides draw on sources such as vendor documentation and public security guidance. Source links are included in articles when they help readers verify a claim or learn more."
                }
              },
              {
                "@type": "Question",
                "name": "How does StrongPasswordGenerator.dev review recommendations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tool comparisons may consider documented security features, pricing, platform support, export options, and fit for the reader's situation. Articles identify affiliate links where they appear."
                }
              },
              {
                "@type": "Question",
                "name": "How often does StrongPasswordGenerator.dev update content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Articles display their publication date. When an article is materially revised, its repository date can be updated to reflect that change."
                }
              },
              {
                "@type": "Question",
                "name": "Does StrongPasswordGenerator.dev use affiliate links?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some outbound links are affiliate links. If you buy through those links, we may earn a commission at no extra cost to you. Affiliate relationships help keep the generator and guides free, but they do not determine whether a product is included or how it is described."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of content does StrongPasswordGenerator.dev avoid publishing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our editorial standard is to publish practical security guidance in plain language and to distinguish sponsored links from ordinary editorial references."
                }
              },
              {
                "@type": "Question",
                "name": "How can I report corrections or updates to StrongPasswordGenerator.dev?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Security advice changes as products, threats, and platform defaults change. If you spot an outdated claim, broken link, or factual issue, please contact us so we can review and update the page."
                }
              }
            ]
          })
        }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema-editorial"
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
                "name": "Editorial Policy",
                "item": "https://strongpasswordgenerator.dev/editorial-policy"
              }
            ]
          })
        }}
        strategy="beforeInteractive"
      />
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
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">Trust and transparency</p>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Editorial Policy</h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            StrongPasswordGenerator.dev publishes practical password security guidance for everyday users. Our goal is to help readers make safer account-security decisions without hype, fear tactics, or unnecessary complexity.
          </p>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Articles draw on sources such as vendor documentation and public security guidance.</li>
              <li>Tool comparisons explain the factors considered and identify affiliate links where they appear.</li>
              <li>Publication dates come from each article&apos;s repository record rather than the site build time.</li>
              <li>Some links may earn us a commission at no extra cost to the reader.</li>
              <li>Readers can report factual concerns or broken links through the contact page.</li>
            </ul>
          </section>

          <div className="space-y-7 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Research Articles</h2>
              <p>
                Security guides draw on sources such as vendor documentation and public security guidance. We include source links in articles when they help readers verify a claim or learn more.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Review Recommendations</h2>
              <p>
                Tool comparisons may consider documented security features, pricing, platform support, export options, and fit for the reader&apos;s situation. Articles identify affiliate links where they appear.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Update Content</h2>
              <p>
                Articles display their publication date. When an article is materially revised, its repository date can be updated to reflect that change.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Affiliate Disclosure</h2>
              <p>
                Some outbound links are affiliate links. If you buy through those links, we may earn a commission at no extra cost to you. Affiliate relationships help keep the generator and guides free, but they do not determine whether a product is included or how it is described.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">What We Avoid</h2>
              <p>
                Our editorial standard is to publish practical security guidance in plain language and to distinguish sponsored links from ordinary editorial references.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Corrections and Updates</h2>
              <p>
                Security advice changes as products, threats, and platform defaults change. If you spot an outdated claim, broken link, or factual issue, please contact us so we can review and update the page.
              </p>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How does StrongPasswordGenerator.dev research articles?</h3>
                <p className="text-slate-600 leading-relaxed">A: Security guides draw on sources such as vendor documentation and public security guidance. Source links are included when they help readers verify a claim or learn more.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How does StrongPasswordGenerator.dev review recommendations?</h3>
                <p className="text-slate-600 leading-relaxed">A: Tool comparisons may consider documented security features, pricing, platform support, export options, and fit for the reader&apos;s situation. Articles identify affiliate links where they appear.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How often does StrongPasswordGenerator.dev update content?</h3>
                <p className="text-slate-600 leading-relaxed">A: Articles display their publication date. When an article is materially revised, its repository date can be updated to reflect that change.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: Does StrongPasswordGenerator.dev use affiliate links?</h3>
                <p className="text-slate-600 leading-relaxed">A: Some outbound links are affiliate links. If you buy through those links, we may earn a commission at no extra cost to you. Affiliate relationships help keep the generator and guides free, but they do not determine whether a product is included or how it is described.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: What kind of content does StrongPasswordGenerator.dev avoid publishing?</h3>
                <p className="text-slate-600 leading-relaxed">A: Our editorial standard is to publish practical security guidance in plain language and to distinguish sponsored links from ordinary editorial references.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How can I report corrections or updates to StrongPasswordGenerator.dev?</h3>
                <p className="text-slate-600 leading-relaxed">A: Security advice changes as products, threats, and platform defaults change. If you spot an outdated claim, broken link, or factual issue, please contact us so we can review and update the page.</p>
              </div>
            </div>
          </section>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Need to Flag an Issue?</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Send corrections, broken links, or factual concerns through our <Link href="/contact" className="text-indigo-600 hover:underline">contact page</Link>. We use reader feedback to review update priorities.
            </p>
          </div>
        </article>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3 flex-wrap">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/recommended-tools" className="hover:text-indigo-600">Tools</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
          <Link href="/terms" className="hover:text-indigo-600">Terms</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev</p>
      </footer>
    </div>
  );
}
