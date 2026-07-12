import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hub.title} | Strong Password Generator`,
    description: 'Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.',
  },
};

export default function PasswordSecurityHub() {
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
        "item": "https://strongpasswordgenerator.dev/blog/password-security"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopicHubPage hub={hub} />
    </>
  );
}
