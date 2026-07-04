import type { Metadata } from 'next';
import AffiliateCTA from '../../components/AffiliateCTA';
import MoneyNextStep from '../../components/MoneyNextStep';
import NordPassCTA from '../../components/NordPassCTA';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import {
  allPosts,
  extractFaqItems,
  getHubForPost,
  getPostDescription,
  getRelatedPosts,
  type PostMeta,
} from '../../../lib/posts';

interface PostData {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  description?: string;
  excerpt: string;
  content: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://strongpasswordgenerator.dev';
const OG_IMAGE_URL = `${SITE_URL}/og-image.svg`;

const bitwardenRecommendedSlugs = new Set([
  'bitwarden-setup-guide',
  'lastpass-alternatives',
]);

const nordPassRecommendedSlugs = new Set([
  'nordpass-vs-dashlane-2026',
  'nordpass-review-2026',
  'free-vs-paid-password-managers-2026',
  'password-manager-vs-browser-autofill',
  'how-to-create-strong-password',
]);

function getAffiliateProduct(post: PostData): 'bitwarden' | 'nordpass' | 'nordvpn' | 'nordprotect' {
  const topicText = `${post.slug} ${post.category} ${post.tags.join(' ')} ${post.title}`.toLowerCase();

  if (topicText.includes('vpn') || topicText.includes('wifi') || topicText.includes('remote work')) {
    return 'nordvpn';
  }

  if (
    topicText.includes('identity') ||
    topicText.includes('breach') ||
    topicText.includes('dark web') ||
    topicText.includes('credit') ||
    topicText.includes('hacked')
  ) {
    return 'nordprotect';
  }

  if (topicText.includes('nordpass') || topicText.includes('password manager') || topicText.includes('password')) {
    return 'nordpass';
  }

  return 'bitwarden';
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.json`);
  if (!fs.existsSync(filePath)) return {};

  const post: PostData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const title = `${post.title} | Strong Password Generator`;
  const description = getPostDescription(post);
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: postUrl,
      siteName: 'Strong Password Generator',
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: 'Strong Password Generator security tools',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@strongpwdgen',
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const post: PostData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const description = getPostDescription(post);
  const relatedPosts: PostMeta[] = getRelatedPosts(post);
  const hub = getHubForPost(post);
  const faqItems = extractFaqItems(post.content);
  const affiliateProduct = getAffiliateProduct(post);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": description,
            "image": [
              OG_IMAGE_URL,
            ],
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": "Strong Password Generator",
            },
          })
        }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer,
                },
              })),
            }),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strongpasswordgenerator.dev" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://strongpasswordgenerator.dev/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://strongpasswordgenerator.dev/blog/${slug}` },
            ],
          })
        }}
      />
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

          {nordPassRecommendedSlugs.has(post.slug) && (
            <div className="my-6">
              <NordPassCTA />
            </div>
          )}

          {bitwardenRecommendedSlugs.has(post.slug) && (
            <blockquote className="bg-indigo-50 border-l-4 border-indigo-300 rounded-r-xl p-4 my-6 text-sm text-indigo-900">
              <strong>Recommended:</strong> We use and recommend{' '}<a
                href="https://bitwarden.com/?utm_source=strongpasswordgenerator"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-semibold underline hover:text-indigo-700"
              >
                Bitwarden
              </a>{' '}— free, open-source, and trusted by millions.
            </blockquote>
          )}

          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <MoneyNextStep tags={post.tags} category={post.category} />

          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Keep Improving Your Account Security</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {hub && (
                <li>
                  <Link href={`/blog/${hub.slug}`} className="font-semibold text-indigo-700 hover:underline">
                    Browse the {hub.shortTitle.toLowerCase()} hub
                  </Link>{' '}
                  for the complete set of related guides.
                </li>
              )}
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug}>
                  <Link href={`/blog/${relatedPost.slug}`} className="font-semibold text-indigo-700 hover:underline">
                    {relatedPost.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

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

        <div className="mt-8">
          <AffiliateCTA product={affiliateProduct} />
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
