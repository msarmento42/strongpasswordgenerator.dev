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
                  "text": "Security guides are based on vendor documentation, public security guidance, breach-response best practices, and hands-on evaluation where applicable. We prioritize advice that a reader can apply immediately: unique passwords, password managers, two-factor authentication, passkeys, account recovery, and breach monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "How does StrongPasswordGenerator.dev review recommendations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tool recommendations consider security model, reputation, pricing, ease of use, cross-device support, export options, and fit for the reader's situation. We avoid recommending tools solely because they pay commissions."
                }
              },
              {
                "@type": "Question",
                "name": "How often does StrongPasswordGenerator.dev update content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We review commercially important pages more often than evergreen explainers, especially when pricing, feature limits, or vendor positioning changes. When a recommendation meaningfully changes, we update the page rather than quietly redirecting readers to a different product."
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
                  "text": "We avoid publishing filler pages, exaggerated scare tactics, fake urgency, or recommendations that exist only to monetize search traffic. If a product is not a good fit for the reader's situation, we would rather point them to a different guide than force a weak recommendation."
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
          </p>          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Our content is based on thorough research, including vendor documentation and security best practices, prioritizing actionable advice for users.</li>
              <li>Tool recommendations are chosen for their security, reputation, and usability, not solely for affiliate commissions.</li>
              <li>We frequently review and update content, especially for commercially important pages, to ensure accuracy and relevance.</li>
              <li>Some links are affiliate links, which may earn us a commission at no extra cost to you, helping to keep our resources free.</li>
              <li>We avoid scare tactics, fake urgency, or content published solely for monetization, focusing instead on genuine value.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Our content is based on thorough research, including vendor documentation and security best practices, prioritizing actionable advice for users.</li>
              <li>Tool recommendations are chosen for their security, reputation, and usability, not solely for affiliate commissions.</li>
              <li>We frequently review and update content, especially for commercially important pages, to ensure accuracy and relevance.</li>
              <li>Some links are affiliate links, which may earn us a commission at no extra cost to you, helping to keep our resources free.</li>
              <li>We avoid scare tactics, fake urgency, or content published solely for monetization, focusing instead on genuine value.</li>
            </ul>
          </section>

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
              <h2 className="text-xl font-bold text-slate-800 mb-2">How We Update Content</h2>
              <p>
                We review commercially important pages more often than evergreen explainers, especially when pricing, feature limits, or vendor positioning changes. When a recommendation meaningfully changes, we update the page rather than quietly redirecting readers to a different product.
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
                We avoid publishing filler pages, exaggerated scare tactics, fake urgency, or recommendations that exist only to monetize search traffic. If a product is not a good fit for the reader&apos;s situation, we would rather point them to a different guide than force a weak recommendation.
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
                <p className="text-slate-600 leading-relaxed">A: Security guides are based on vendor documentation, public security guidance, breach-response best practices, and hands-on evaluation where applicable. We prioritize advice that a reader can apply immediately: unique passwords, password managers, two-factor authentication, passkeys, account recovery, and breach monitoring.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How does StrongPasswordGenerator.dev review recommendations?</h3>
                <p className="text-slate-600 leading-relaxed">A: Tool recommendations consider security model, reputation, pricing, ease of use, cross-device support, export options, and fit for the reader&apos;s situation. We avoid recommending tools solely because they pay commissions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: How often does StrongPasswordGenerator.dev update content?</h3>
                <p className="text-slate-600 leading-relaxed">A: We review commercially important pages more often than evergreen explainers, especially when pricing, feature limits, or vendor positioning changes. When a recommendation meaningfully changes, we update the page rather than quietly redirecting readers to a different product.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: Does StrongPasswordGenerator.dev use affiliate links?</h3>
                <p className="text-slate-600 leading-relaxed">A: Some outbound links are affiliate links. If you buy through those links, we may earn a commission at no extra cost to you. Affiliate relationships help keep the generator and guides free, but they do not determine whether a product is included or how it is described.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Q: What kind of content does StrongPasswordGenerator.dev avoid publishing?</h3>
                <p className="text-slate-600 leading-relaxed">A: We avoid publishing filler pages, exaggerated scare tactics, fake urgency, or recommendations that exist only to monetize search traffic. If a product is not a good fit for the reader&apos;s situation, we would rather point them to a different guide than force a weak recommendation.</p>
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
    </div>
  );
}
