import type { Metadata } from 'next';import Script from 'next/script';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'phishing')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Protect yourself from phishing scams. Learn to identify common attacks, understand what phishing is, and discover best practices to stay safe online.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/blog/phishing',
  },
  openGraph: {
    title: `${hub.title} | Strong Password Generator`,
    description: 'Protect yourself from phishing scams. Learn to identify common attacks, understand what phishing is, and discover best practices to stay safe online.',
    url: 'https://strongpasswordgenerator.dev/blog/phishing',
    siteName: 'Strong Password Generator',
    type: 'website',    images: [{ url: '/og-image.svg' }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strongpasswordgenerator.dev/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://strongpasswordgenerator.dev/blog" },
    { "@type": "ListItem", "position": 3, "name": "Phishing", "item": "https://strongpasswordgenerator.dev/blog/phishing" }
  ]
};

export default function PhishingHub() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${hub.title} | Strong Password Generator`,
    "description": 'Protect yourself from phishing scams. Learn to identify common attacks, understand what phishing is, and discover best practices to stay safe online.',
    "url": "https://strongpasswordgenerator.dev/blog/phishing"
  };

  return (
    <>
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TopicHubPage hub={hub} />
    </>
  );
}
