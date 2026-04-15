import { notFound } from 'next/navigation';
import Link from 'next/link';
import postsIndex from '../../../posts/index.json';
import fs from 'fs';
import path from 'path';

interface PostData {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

interface PostMeta {
  slug: string;
}

export async function generateStaticParams() {
  const index: PostMeta[] = postsIndex;
  return index.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.json`);
  if (!fs.existsSync(filePath)) return {};
  const post: PostData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return {
    title: `${post.title} | Strong Password Generator`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const post: PostData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

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
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            ← All Articles
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">{post.readingTime} read</span>
            <span className="text-xs text-slate-400">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-6 border-l-4 border-indigo-200 pl-4 italic">
            {post.excerpt}
          </p>

          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          <p className="font-bold text-lg mb-2">🔒 Generate a Strong Password Now</p>
          <p className="text-indigo-100 text-sm mb-4">Use our free tool to create cryptographically secure passwords for all your accounts.</p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            Try the Password Generator →
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link href="/blog" className="text-sm text-indigo-600 hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm mt-8">
        <p>🔒 All passwords are generated locally. Nothing is sent to any server.</p>
      </footer>
    </div>
  );
}
