import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'password-managers')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  alternates: {
    canonical: '/blog/password-managers',
  },
};

export default function PasswordManagersHub() {
  return <TopicHubPage hub={hub} />;
}
