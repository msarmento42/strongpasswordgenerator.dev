import type { MetadataRoute } from 'next';
import postsIndex from '../posts/index.json';

const BASE_URL = 'https://strongpasswordgenerator.dev';

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/recommended-tools`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/editorial-policy`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const postRoutes: MetadataRoute.Sitemap = postsIndex.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
