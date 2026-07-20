import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';
import AffiliateCTA from '../../components/AffiliateCTA';
import NordPassCTA from '../../components/NordPassCTA';

const hub = topicHubs.find((item) => item.slug === 'password-managers')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  alternates: {
    canonical: '/blog/password-managers',
  },
  openGraph: {
    title: `${hub.title} | Strong Password Generator`,
    description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
    url: 'https://strongpasswordgenerator.dev/blog/password-managers',
    siteName: 'Strong Password Generator',
    type: 'website',    images: [{ url: '/og-image.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hub.title} | Strong Password Generator`,
    description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  },
};

export default function PasswordManagersHub() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Password Managers",
            description: "Learn about the best password managers, how they work, and why you should use one to secure your online accounts.",
            url: "https://strongpasswordgenerator.dev/blog/password-managers",
          }),
        }}
      />
      <TopicHubPage hub={hub} />

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">Commercial shortlist</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Start with the right password manager path</h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            Most people do not need another generic roundup. They need the shortest path to the right decision:
            best free option, best family setup, best business controls, or best open-source choice.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-1 text-sm font-semibold text-slate-900">Best first stop for most readers</p>
              <p className="mb-3 text-sm leading-6 text-slate-600">Compare the main consumer options before you commit to a vault, browser extension, and migration flow.</p>
              <Link href="/blog/nordpass-review-2026" className="text-sm font-semibold text-indigo-600 hover:underline">Read the NordPass review</Link>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-1 text-sm font-semibold text-slate-900">Best for families</p>
              <p className="mb-3 text-sm leading-6 text-slate-600">Shared vaults, recovery, and non-technical onboarding matter more than feature lists.</p>
              <Link href="/blog/best-password-manager-for-families-2026" className="text-sm font-semibold text-indigo-600 hover:underline">Compare family plans</Link>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-1 text-sm font-semibold text-slate-900">Best for teams</p>
              <p className="mb-3 text-sm leading-6 text-slate-600">Admin controls, provisioning, and offboarding become the real buying criteria once a business is involved.</p>
              <Link href="/blog/best-password-manager-for-business-2026" className="text-sm font-semibold text-indigo-600 hover:underline">See business picks</Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr,1fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">How to choose in five minutes</h3>
              <ol className="space-y-2 text-sm leading-6 text-slate-600">
                <li>1. Pick <strong className="text-slate-900">Bitwarden</strong> if open source, auditability, or self-hosting matter most.</li>
                <li>2. Pick <strong className="text-slate-900">NordPass</strong> if you want the cleanest mainstream setup with a strong free on-ramp.</li>
                <li>3. Pick <strong className="text-slate-900">1Password</strong> if family sharing or team workflow is the main job.</li>
                <li>4. Add <strong className="text-slate-900">NordProtect</strong> if your concern has moved from password hygiene to active breach exposure.</li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/recommended-tools" className="font-semibold text-indigo-600 hover:underline">Open the full tools page</Link>
                <Link href="/blog/password-manager-vs-browser-autofill" className="font-semibold text-indigo-600 hover:underline">Browser autofill vs manager</Link>
                <Link href="/blog/bitwarden-setup-guide" className="font-semibold text-indigo-600 hover:underline">Bitwarden setup guide</Link>
              </div>
            </div>
            <AffiliateCTA product="nordpass" />
          </div>

          <div className="mt-6">
            <NordPassCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
