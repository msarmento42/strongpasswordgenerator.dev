import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';
import NordPassCTA from '../../components/NordPassCTA';

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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hub.title} | Strong Password Generator`,
    description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  },
};

export default function PasswordManagersHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://strongpasswordgenerator.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": hub.title,
        "item": "https://strongpasswordgenerator.dev/blog/password-managers"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NordPassCTA />
      <TopicHubPage hub={hub} />
    </>
  );
}
