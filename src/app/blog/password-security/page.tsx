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

export default function PasswordSecurityHub() {
  return (
    <>
      <Script id="collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name": `${hub.title} | Strong Password Generator`,"description":"Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.","url":"https://strongpasswordgenerator.dev/blog/password-security"}) }} />
      <TopicHubPage hub={hub} />
    </>
  );
}
