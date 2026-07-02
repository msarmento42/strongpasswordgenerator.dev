import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'password-security')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: hub.description,
  alternates: {
    canonical: '/blog/password-security',
  },
};

export default function PasswordSecurityHub() {
  return <TopicHubPage hub={hub} />;
}
