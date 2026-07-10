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
  return <TopicHubPage hub={hub} />;
}
