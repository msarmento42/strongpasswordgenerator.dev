import Link from 'next/link';

export const metadata = {
  title: 'Recommended Security Tools | Strong Password Generator',
  description: 'Our top picks for password managers, VPNs, antivirus, and identity protection. Curated by the SecurePass security team.',
};

const tools = [
  {
    category: 'Password Managers',
    items: [
      {
        name: 'NordPass',
        tagline: 'Zero-knowledge password manager with a generous free tier',
        description: 'NordPass uses XChaCha20 encryption and a zero-knowledge architecture — even NordPass cannot see your passwords. It includes a built-in data breach scanner, password health report, and secure sharing. The free tier supports unlimited passwords.',
        url: 'https://www.kqzyfj.com/click-101754888-17262576',
        badge: 'Best Free Option',
        badgeColor: '#10b981',
        sponsored: true,
        features: ['Zero-knowledge XChaCha20 encryption', 'Data breach scanner', 'Password health report', 'Free tier available', 'Secure password sharing'],
      },
      {
        name: '1Password',
        tagline: 'Best password manager for families and teams',
        description: '1Password is the gold standard for team and family use. Travel Mode lets you hide vaults at border crossings, and Watchtower alerts you to breached, reused, and weak passwords in real time. Full passkey support included.',
        url: 'https://1password.com',
        badge: 'Best for Teams',
        badgeColor: '#3b82f6',
        sponsored: true,
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
        url: 'https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2892161',
        badge: 'Top Pick',
        badgeColor: '#6366f1',
        sponsored: true,
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
        sponsored: true,
        features: ['Real-time malware protection', 'Ransomware shield', 'Wi-Fi inspector', 'Webcam protection (premium)', 'Free tier available'],
      },
      {
        name: 'McAfee',
        tagline: 'All-in-one security suite with identity monitoring',
        description: 'McAfee Total Protection bundles antivirus, a VPN, identity monitoring, and a password manager in one subscription — a good pick if you want one product covering multiple security needs across all your devices.',
        url: 'https://mcafee.com',
        badge: 'All-in-One',
        badgeColor: '#ef4444',
        sponsored: true,
        features: ['Antivirus + VPN bundled', 'Identity monitoring', 'Password manager included', 'Multi-device support', 'Safe browsing extension'],
      },
    ],
  },
  {
    category: 'Identity Protection',
    items: [
      {
        name: 'NordProtect',
        tagline: 'Dark web monitoring and identity theft protection from Nord Security',
        description: 'NordProtect monitors your personal data — email addresses, passwords, credit card numbers, and more — across the dark web and data breaches. Get instant alerts if your information is exposed, plus identity theft insurance and recovery support backed by Nord Security.',
        url: 'https://www.awin1.com/cread.php?awinmid=123620&awinaffid=2892161',
        badge: 'Top Pick',
        badgeColor: '#8b5cf6',
        sponsored: true,
        features: ['Dark web monitoring', 'Real-time breach alerts', 'Identity theft insurance', 'Personal data scanning', 'Backed by Nord Security'],
      },
    ],
  },
];

export default function RecommendedToolsPage() {
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Recommended Security Tools</h1>
          <p className="text-slate-500 mb-3">Our curated picks for the tools that actually move the needle on your security. All listed here based on features, reputation, and real-world value.</p>
          <p className="text-xs text-slate-400 italic">Some links on this page are affiliate links. We may earn a commission at no extra cost to you — this never influences our recommendations.</p>
        </div>

        <div className="space-y-10">
          {tools.map((section) => (
            <section key={section.category}>
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
                        </div>
                        <p className="text-sm text-slate-500 font-medium">{tool.tagline}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tool.description}</p>
                    <ul className="grid grid-cols-2 gap-1 mb-5">
                      {tool.features.map((f) => (
                        <li key={f} className="text-xs text-slate-500 flex items-center gap-1">
                          <span className="text-indigo-500">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tool.url}
                      rel={tool.sponsored ? 'noopener sponsored' : 'noopener'}
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition"
                    >
                      Try {tool.name} →
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
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev · <span className="italic">Affiliate disclosure: some links earn us a commission.</span></p>
      </footer>
    </div>
  );
}
