import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';
import { topicHubs } from '../../../lib/posts';
import NordPassCTA from '../../components/NordPassCTA';
import RelatedPostsList from '../../components/RelatedPostsList';
import { getHubPosts } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'password-managers')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Learn about the best password managers, how they work, and why you should use one to secure your online accounts.',
  alternates: {
    canonical: '/blog/password-managers',
  },
};

export default function PasswordManagersHub() {
  return (
    <>
      <NordPassCTA />
      <RelatedPostsList posts={getHubPosts(hub)} title="More on Password Managers" />
      <TopicHubPage hub={hub} />
    </>
  );
}
