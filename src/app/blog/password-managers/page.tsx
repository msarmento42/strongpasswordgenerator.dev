import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';
import NordPassCTA from '../../components/NordPassCTA';import Script from 'next/script';

const hub = topicHubs.find((item) => item.slug === 'password-managers')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  alternates: {
    canonical: '/blog/password-managers',
  },
  openGraph: {
    title: `${hub.title} | Strong Password Generator`,
    description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
    url: 'https://strongpasswordgenerator.dev/blog/password-managers',
    siteName: 'Strong Password Generator',
    type: 'website',    images: [{ url: '/og-image.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hub.title} | Strong Password Generator`,
    description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  },
};

export default function PasswordManagersHub() {
  return (
    <>
      <Script id="collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Password Managers","description":"Learn about the best password managers, how they work, and why you should use one to secure your online accounts.","url":"https://strongpasswordgenerator.dev/blog/password-managers"}) }} />      <NordPassCTA />
      <TopicHubPage hub={hub} />
    </>
  );
}
