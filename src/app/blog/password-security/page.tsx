import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';import Script from 'next/script';

const hub = topicHubs.find((item) => item.slug === 'password-security')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.',
  alternates: {
    canonical: '/blog/password-security',
  },
  openGraph: {
    title: `${hub.title} | Strong Password Generator`,
    description: 'Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.',
    url: 'https://strongpasswordgenerator.dev/blog/password-security',
    siteName: 'Strong Password Generator',
    type: 'website',    images: [{ url: '/og-image.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hub.title} | Strong Password Generator`,
    description: 'Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strongpasswordgenerator.dev/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://strongpasswordgenerator.dev/blog" },
    { "@type": "ListItem", "position": 3, "name": "Password Security", "item": "https://strongpasswordgenerator.dev/blog/password-security" }
  ]
};

export default function PasswordSecurityHub() {
  return (
    <>
      <Script id="collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name": `${hub.title} | Strong Password Generator`,"description":"Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.","url":"https://strongpasswordgenerator.dev/blog/password-security"}) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TopicHubPage hub={hub} />
    </>
  );
}
