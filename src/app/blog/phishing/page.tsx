import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'phishing')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Understand what phishing is, how to identify common phishing scams, and best practices to protect yourself from cybercriminals.',
  alternates: {
    canonical: '/blog/phishing',
  },
};

export default function PhishingHub() {
  return <TopicHubPage hub={hub} />;
}
