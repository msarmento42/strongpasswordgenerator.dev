import Link from 'next/link';
import { PostMeta } from '../../lib/posts';

interface RelatedPostsListProps {
  posts: PostMeta[];
  title?: string;
}

export default function RelatedPostsList({ posts, title = 'Related Posts by Topic' }: RelatedPostsListProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md shadow-slate-200/50 mt-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-5">{title}</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-slate-400">{post.readingTime} read</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-700">
                {post.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}