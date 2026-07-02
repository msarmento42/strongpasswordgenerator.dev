import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'phishing')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: hub.description,
  alternates: {
    canonical: '/blog/phishing',
  },
};

export default function PhishingHub() {
  return <TopicHubPage hub={hub} />;
}
