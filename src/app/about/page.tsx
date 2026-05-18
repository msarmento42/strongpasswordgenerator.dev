import Link from 'next/link';

export const metadata = {
  title: 'About | Strong Password Generator',
  description: 'Learn about StrongPasswordGenerator.dev — a free tool to generate cryptographically secure passwords and learn password security best practices.',
};

export default function AboutPage() {
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
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">About SecurePass</h1>
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

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">How the Generator Works</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>Passwords are generated using <strong>cryptographically secure randomness</strong> from the browser&apos;s built-in <code className="bg-slate-100 px-1 rounded text-indigo-600">crypto.getRandomValues()</code> API — the same standard used by secure applications worldwide.</p>
            <p>Strength is calculated using <strong>Shannon entropy</strong>: the number of bits of randomness in your password given its character set and length. Crack time estimates assume a dedicated attacker running 10 billion guesses per second.</p>
            <p>Password history is stored only in your browser&apos;s <code className="bg-slate-100 px-1 rounded text-indigo-600">localStorage</code> — it never leaves your device and is cleared when you clear browser data.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Our Recommendations Philosophy</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Our <Link href="/recommended-tools" className="text-indigo-600 hover:underline">Recommended Tools</Link> page lists products we genuinely endorse. Some links are affiliate links — we earn a small commission if you sign up, at no cost to you. This helps keep the site free.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We only recommend tools we&apos;d use ourselves. Affiliate relationships never influence which tools we list or how we describe them.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link href="/" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition">Generate a Password</Link>
          <Link href="/blog" className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-50 transition">Security Blog</Link>
          <Link href="/contact" className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-50 transition">Contact Us</Link>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/recommended-tools" className="hover:text-indigo-600">Tools</Link>
          <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
        </div>
        <p>© 2026 StrongPasswordGenerator.dev</p>
      </footer>
    </div>
  );
}
