import Link from 'next/link';
import postsIndex from '../../posts/index.json';

export const metadata = {
  title: 'Password Security Blog | Strong Password Generator',
  description: 'Expert guides on password security, password managers, two-factor authentication, and protecting your accounts online.',
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
}

export default function BlogPage() {
  const posts: PostMeta[] = [...postsIndex].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
          <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            ← Password Generator
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Password Security Blog</h1>
          <p className="text-slate-500">Practical guides to protect your accounts and data online.</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-md shadow-slate-200/50 p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readingTime} read</span>
                <span className="text-xs text-slate-400">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm mt-8">
        <p>🔒 <Link href="/" className="text-indigo-600 hover:underline">Generate a secure password</Link> — All passwords are created locally. Nothing is sent to any server.</p>
      </footer>
    </div>
  );
}
