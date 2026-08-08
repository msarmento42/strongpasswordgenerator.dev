import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import AffiliateCTA from '../components/AffiliateCTA';
import NordPassCTA from '../components/NordPassCTA';
import PasswordManagerComparisonTable from '../components/PasswordManagerComparisonTable';
import { affiliates } from '../../lib/affiliates';

export const metadata: Metadata = {
  title: 'Recommended Security Tools | Strong Password Generator',
  description: 'Our top picks for password managers, VPNs, antivirus, and identity protection. Curated by the Strong Password Generator security team.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/recommended-tools',
  },
  openGraph: {
    type: 'website',
    url: 'https://strongpasswordgenerator.dev/recommended-tools',
    siteName: 'Strong Password Generator',
    title: 'Recommended Security Tools | Strong Password Generator',
    description: 'Our top picks for password managers, VPNs, antivirus, and identity protection.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recommended Security Tools | Strong Password Generator',
    description: 'Our top picks for password managers, VPNs, antivirus, and identity protection.',
  },
};

const tools = [
  {
    category: 'Password Managers',
    items: [
      {
        name: 'NordPass',
        tagline: 'Zero-knowledge password manager with a generous free tier',
        description: 'NordPass uses XChaCha20 encryption and a zero-knowledge architecture — even NordPass cannot see your passwords. It includes a built-in data breach scanner, password health report, and secure sharing. The free tier supports unlimited passwords.',
        url: affiliates.nordpass.url,
        badge: 'Best Free Option',
        badgeColor: '#10b981',
        monetized: affiliates.nordpass.monetized,
        features: ['Zero-knowledge XChaCha20 encryption', 'Data breach scanner', 'Password health report', 'Free tier available', 'Secure password sharing'],
      },
      {
        name: 'Bitwarden',
        tagline: 'The open-source password manager trusted by millions',
        description: 'Bitwarden is the leading open-source password manager — fully audited, end-to-end encrypted, and free for individuals. Self-host if you want full control, or use their cloud. Bitwarden supports TOTP, passkeys, and secure sharing, and the free tier has no practical limits.',
        url: affiliates.bitwarden.url,
        badge: 'Open Source',
        badgeColor: '#175DDC',
        monetized: affiliates.bitwarden.monetized,
        features: ['End-to-end encrypted vault', 'Fully open-source & audited', 'Free tier with unlimited passwords', 'TOTP authenticator built-in', 'Self-hosting option available'],
      },
      {
        name: '1Password',
        tagline: 'Best password manager for families and teams',
        description: '1Password is the gold standard for team and family use. Travel Mode lets you hide vaults at border crossings, and Watchtower alerts you to breached, reused, and weak passwords in real time. Full passkey support included.',
        url: 'https://1password.com',
        badge: 'Best for Teams',
        badgeColor: '#3b82f6',
        monetized: false,
        features: ['Watchtower breach monitoring', 'Travel Mode (hide vaults)', 'Passkey support', 'Family and team plans', 'Emergency access'],
      },
    ],
  },
  {
    category: 'VPNs',
    items: [
      {
        name: 'NordVPN',
        tagline: 'Fast, reliable VPN — essential on public Wi-Fi',
        description: 'NordVPN has 6,000+ servers across 60+ countries, a verified no-logs policy, and the NordLynx protocol for top speeds. Dark Web Monitor scans for your email being leaked. Essential if you ever use coffee shop or airport Wi-Fi.',
        url: affiliates.nordvpn.url,
        badge: 'Top Pick',
        badgeColor: '#6366f1',
        monetized: affiliates.nordvpn.monetized,
        features: ['6,000+ servers in 60+ countries', 'Verified no-logs policy', 'Dark Web Monitor', 'NordLynx (WireGuard) protocol', 'Built-in threat protection'],
      },
    ],
  },
  {
    category: 'Antivirus & Device Security',
    items: [
      {
        name: 'Avast',
        tagline: 'Comprehensive antivirus with a solid free tier',
        description: 'Avast protects against viruses, ransomware, and spyware with real-time shields. The free version covers malware scanning, Wi-Fi inspector, and more. Premium adds ransomware shields, webcam protection, and a firewall.',
        url: 'https://avast.com',
        badge: 'Free Tier Available',
        badgeColor: '#f59e0b',
        monetized: false,
        features: ['Real-time malware protection', 'Ransomware shield', 'Wi-Fi inspector', 'Webcam protection (premium)', 'Free tier available'],
      },
      {
        name: 'McAfee',
        tagline: 'All-in-one security suite with identity monitoring',
        description: 'McAfee Total Protection bundles antivirus, a VPN, identity monitoring, and a password manager in one subscription — a good pick if you want one product covering multiple security needs across all your devices.',
        url: 'https://mcafee.com',
        badge: 'All-in-One',
        badgeColor: '#ef4444',
        monetized: false,
        features: ['Antivirus + VPN bundled', 'Identity monitoring', 'Password manager included', 'Multi-device support', 'Safe browsing extension'],
      },
    ],
  },
  {
    category: 'Identity Protection',
    items: [
      {
        name: 'Coveron (formerly NordProtect)',
        tagline: 'Dark web monitoring and identity theft protection from Nord Security',
        description: 'Coveron (formerly NordProtect) monitors your personal data — email addresses, passwords, credit card numbers, and more — across the dark web and data breaches. Get instant alerts if your information is exposed, plus identity theft insurance and recovery support backed by Nord Security.',
        url: affiliates.nordprotect.url,
        badge: 'Top Pick',
        badgeColor: '#8b5cf6',
        monetized: affiliates.nordprotect.monetized,
        features: ['Dark web monitoring', 'Real-time breach alerts', 'Identity theft insurance', 'Personal data scanning', 'Backed by Nord Security'],
      },
    ],
  },
];

const flattenedTools = tools.flatMap(category =>
  category.items.map(item => ({
    ...item,
    parentCategory: category.category,
  }))
);

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Recommended Security Tools",
  "itemListElement": flattenedTools.map((tool, index) => ({
    "@type": "ListItem",
    "position": index + 1, // 1-indexed position
    "item": {
      "@type": "Product",
      "name": tool.name,
      "description": tool.description,
      "url": tool.url,
      "category": tool.parentCategory,
    },
  })),
};

const paths = [
  {
    title: 'Protect a family',
    description: 'Start with shared vaults, recovery, and a quarterly cleanup routine.',
    href: '/blog/best-password-manager-for-families-2026',
    cta: 'Compare family plans',
  },
  {
    title: 'Secure a small team',
    description: 'Prioritize admin controls, onboarding, offboarding, and breach alerts.',
    href: '/blog/best-password-manager-for-business-2026',
    cta: 'See business picks',
  },
  {
    title: 'Reduce identity risk',
    description: 'Add breach monitoring, credit freeze basics, and recovery planning.',
    href: '/recommended-tools#identity-protection',
    cta: 'Review protection tools',
  },
];

const firstMoveCards = [
  {
    title: 'Stop password reuse',
    description: 'Best first purchase for most readers because reused passwords turn one leak into several account takeovers.',
    href: affiliates.nordpass.url,
    cta: 'Start with NordPass',
    monetized: affiliates.nordpass.monetized,
  },
  {
    title: 'Protect public Wi-Fi',
    description: 'Best next layer if you travel, work remotely, or regularly sign in on hotel, airport, or coffee shop networks.',
    href: affiliates.nordvpn.url,
    cta: 'Try NordVPN',
    monetized: affiliates.nordvpn.monetized,
  },
  {
    title: 'Monitor exposed identity data',
    description: 'Best fit if a breach, suspicious mail, leaked SSN, or fraud alert is already part of the situation.',
    href: affiliates.nordprotect.url,
    cta: 'Try Coveron',
    monetized: affiliates.nordprotect.monetized,
  },
];

export default function RecommendedToolsPage() {
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
        "name": "Recommended Tools",
        "item": "https://strongpasswordgenerator.dev/recommended-tools"
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

      <main className="max-w-3xl mx-auto p-6">
        <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          Disclosure: Some links on this page are affiliate links and some are plain editorial links. We may earn a small commission if you make a purchase through an affiliate link, at no extra cost to you.
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Recommended Security Tools</h1>
          <p className="text-slate-500 mb-3">Our curated picks for the tools that actually move the needle on your security. All listed here based on features, reputation, and real-world value.</p>
          <p className="text-xs text-slate-400 italic">Some links on this page are affiliate links and some are plain editorial references. We may earn a commission at no extra cost to you when you use an affiliate link, but that never determines whether a product appears here. <Link href="/editorial-policy" className="text-indigo-600 hover:underline">Review our editorial policy</Link>.</p>
        </div>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-500">Best first move</p>
          <h2 className="mb-3 text-xl font-bold text-slate-800">Buy the layer that fixes your biggest current risk</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {firstMoveCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel={card.monetized ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                <h3 className="mb-2 text-sm font-bold text-slate-800">{card.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-slate-500">{card.description}</p>
                <span className="text-xs font-bold text-indigo-600">{card.cta} →</span>
              </a>
            ))}
          </div>
        </section>

        <div className="mb-8">
          <AffiliateCTA product="nordpass" />
          <div className="mt-8">
            <NordPassCTA />
          </div>

          <PasswordManagerComparisonTable />
        </div>

        <section className="mb-10 rounded-2xl border border-indigo-100 bg-white p-5 shadow-md shadow-slate-200/50">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-500">Choose your security path</p>
          <h2 className="mb-3 text-xl font-bold text-slate-800">Match the tool to the problem you are solving</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {paths.map((path) => (
              <Link key={path.title} href={path.href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50">
                <h3 className="mb-2 text-sm font-bold text-slate-800">{path.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-slate-500">{path.description}</p>
                <span className="text-xs font-bold text-indigo-600">{path.cta} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <h2 className="mb-3 text-lg font-bold text-slate-800">How to read this page</h2>
          <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800 mb-1">Best value</p>
              <p>Usually the product we think offers the smoothest balance of price, usability, and security for most readers.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800 mb-1">Open source or specialist picks</p>
              <p>Included when a tool is a better fit for a specific type of reader even if it is not the default recommendation.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800 mb-1">Affiliate note</p>
              <p>Buttons marked as affiliate links may earn us a commission. Editorial-only links stay unsponsored.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          {tools.map((section) => (
            <section key={section.category} id={section.category === 'Identity Protection' ? 'identity-protection' : undefined}>
              <h2 className="text-xl font-bold text-slate-700 mb-4 pb-2 border-b border-slate-200">{section.category}</h2>
              <div className="space-y-6">
                {section.items.map((tool) => (
                  <div key={tool.name} className="bg-white rounded-2xl shadow-md shadow-slate-200/50 p-6 border border-slate-100">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-800">{tool.name}</h3>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: tool.badgeColor }}>
                            {tool.badge}
                          </span>
                          {tool.monetized ? (
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                              Affiliate
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                              Editorial
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 font-medium">{tool.tagline}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tool.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-5">
                      {tool.features.map((f) => (
                        <li key={f} className="text-xs text-slate-500 flex items-center gap-1">
                          <span className="text-indigo-500">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tool.url}
                      rel={tool.monetized ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition"
                    >
                      {tool.monetized ? `Try ${tool.name} (Affiliate)` : `Visit ${tool.name}`} →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-indigo-800 mb-2">Start with a Strong Password</h2>
          <p className="text-sm text-indigo-600 mb-4">All the tools above work best paired with unique, strong passwords for every account.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition">
            Generate a Password →
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-3 text-lg font-bold text-slate-800">Related buying guides</h2>
          <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            <li><Link className="text-indigo-600 hover:underline" href="/blog/nordpass-review-2026">NordPass review</Link></li>
            <li><Link className="text-indigo-600 hover:underline" href="/blog/public-wifi-security-tips">Public Wi-Fi security guide</Link></li>
            <li><Link className="text-indigo-600 hover:underline" href="/blog/free-vs-paid-password-managers-2026">Free vs paid password managers</Link></li>
            <li><Link className="text-indigo-600 hover:underline" href="/blog/password-manager-vs-browser-autofill">Password manager vs browser autofill</Link></li>
          </ul>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
          <Link href="/terms" className="hover:text-indigo-600">Terms</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev · <span className="italic">Affiliate disclosure: some links earn us a commission.</span></p>
      </footer>

      <Script
        id="breadcrumb-jsonld-rt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="recommended-tools-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}
