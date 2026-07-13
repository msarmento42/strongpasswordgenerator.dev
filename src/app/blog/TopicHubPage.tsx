import Link from 'next/link';
import { getHubPosts, getPostsByCategory, type TopicHub } from '../../lib/posts';
import RelatedPostsList from '../components/RelatedPostsList';import Head from 'next/head';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://strongpasswordgenerator.dev';

export default function TopicHubPage({ hub }: { hub: TopicHub }) {
  const posts = getHubPosts(hub);
  const hubPostSlugs = new Set(posts.map(p => p.slug));
  const relatedPosts = getPostsByCategory(hub.categories)
    .filter(p => !hubPostSlugs.has(p.slug))
    .slice(0, 5); // Limit to 5 related posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">      <Head>
        <meta property="og:title" content={hub.title} />
        <meta property="og:description" content={hub.description} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/blog/${hub.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={hub.title} />
        <meta name="twitter:description" content={hub.description} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": hub.title,
            "description": hub.description,
            "url": `${SITE_URL}/blog/${hub.slug}`,
            "mainEntity": posts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": `${SITE_URL}/blog/${post.slug}`,
              "datePublished": post.date,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Blog",
                "item": `${SITE_URL}/blog`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": hub.shortTitle,
                "item": `${SITE_URL}/blog/${hub.slug}`
              }
            ]
          }),
        }}
      />

      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Strong Password Generator</span>
          </Link>
          <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            Password Generator
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <nav className="text-sm text-slate-500 mb-5">
          <Link href="/blog" className="text-indigo-600 hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>{hub.shortTitle}</span>
        </nav>

        <section className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">{hub.shortTitle}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{hub.title}</h1>
          <p className="text-slate-600 leading-relaxed max-w-3xl">{hub.intro}</p>
        </section>

        <section className="bg-white border border-slate-100 rounded-2xl p-5 mb-8 shadow-md shadow-slate-200/50">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Recommended starting point</h2>
          <p className="text-sm text-slate-600">{hub.primaryCta}</p>
        </section>

        {hub.featuredProducts?.length ? (
          <section className="mb-8 rounded-2xl border border-indigo-100 bg-white p-5 shadow-md shadow-slate-200/50">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-500">Quick picks</p>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Choose the right password manager faster</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {hub.featuredProducts.map((product) => (
                <article key={product.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-bold text-slate-800">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.fit}</p>
                  <Link href={product.href} className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:underline">
                    {product.cta} →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {hub.featuredPaths?.length ? (
          <section className="mb-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Best next step</p>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Match the guide to your use case</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {hub.featuredPaths.map((path) => (
                <Link
                  key={path.title}
                  href={path.href}
                  className="rounded-xl border border-emerald-200 bg-white p-4 transition hover:border-emerald-300"
                >
                  <h3 className="text-base font-bold text-slate-800">{path.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{path.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">{path.cta} →</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="grid gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-md shadow-slate-200/50">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readingTime} read</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-indigo-700">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-indigo-600 hover:underline">
                Read the guide
              </Link>
            </article>
          ))}
        </div>

        <RelatedPostsList posts={relatedPosts} />
      </main>
    </div>
  );
}
