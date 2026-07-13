import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'phishing')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Protect yourself from phishing scams. Learn to identify common attacks, understand what phishing is, and discover best practices to stay safe online.',
  alternates: {
    canonical: 'https://strongpasswordgenerator.dev/blog/phishing',
  },
};

export default function PhishingHub() {
  return <TopicHubPage hub={hub} />;
}
