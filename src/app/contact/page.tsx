import Link from 'next/link';

export const metadata = {
  title: 'Contact | Strong Password Generator',
  description: 'Get in touch with the StrongPasswordGenerator.dev team.',
};

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h1>
          <p className="text-slate-500 mb-8">Questions, feedback, or partnership inquiries — we read everything.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
              <h3 className="font-bold text-indigo-800 mb-2">📝 General Feedback</h3>
              <p className="text-sm text-slate-600">Found a bug, have a feature request, or want to suggest a blog topic? We want to hear it.</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
              <h3 className="font-bold text-purple-800 mb-2">🤝 Partnerships</h3>
              <p className="text-sm text-slate-600">Interested in being featured on our Recommended Tools page or exploring other partnerships? Reach out.</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <p className="text-slate-600 mb-2">Send us an email at:</p>
            <a href="mailto:hello@strongpasswordgenerator.dev" className="text-xl font-bold text-indigo-600 hover:text-indigo-800">
              hello@strongpasswordgenerator.dev
            </a>
            <p className="text-sm text-slate-400 mt-3">We typically respond within 2 business days.</p>
          </div>
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
