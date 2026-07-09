import type { Metadata } from 'next';
import TopicHubPage from '../TopicHubPage';import NordPassCTA from '../../components/NordPassCTA';
import { topicHubs } from '../../../lib/posts';

const hub = topicHubs.find((item) => item.slug === 'password-security')!;

export const metadata: Metadata = {
  title: `${hub.title} | Strong Password Generator`,
  description: 'Discover essential tips and strategies for creating strong passwords, protecting your accounts, and improving your overall password security.',
  alternates: {
    canonical: '/blog/password-security',
  },
};

export default function PasswordSecurityHub() {
  return (
    <>
      <TopicHubPage hub={hub} />
      <NordPassCTA />
    </>
  );
}
