import postsIndex from "../posts/index.json";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  description?: string;
  excerpt: string;
}

export interface TopicHub {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  categories: string[];
  tagMatchers: string[];
  primaryCta: string;
  featuredPaths?: Array<{
    title: string;
    description: string;
    href: string;
    cta: string;
  }>;
  featuredProducts?: Array<{
    name: string;
    fit: string;
    href: string;
    cta: string;
  }>;
}

export const allPosts: PostMeta[] = postsIndex as PostMeta[];

export const topicHubs: TopicHub[] = [
  {
    slug: "password-managers",
    title: "Password Manager Guides",
    shortTitle: "Password managers",
    description:
      "Compare password managers, learn when to upgrade, and choose the safest way to store unique passwords across every account.",
    intro:
      "Password managers are the practical foundation of modern account security. These guides compare the major tools, explain browser autofill tradeoffs, and show how to move from reused passwords to a unique-password system you can actually maintain.",
    categories: ["Password Managers"],
    tagMatchers: ["password manager", "bitwarden", "nordpass", "1password", "dashlane", "lastpass"],
    primaryCta: "Start with the comparison guides, then set up one manager before changing your most important accounts.",
    featuredPaths: [
      {
        title: "Best for families",
        description: "Compare shared vaults, recovery options, and kid-safe account setup before you invite anyone else in.",
        href: "/blog/best-password-manager-for-families-2026",
        cta: "Compare family plans",
      },
      {
        title: "Best for teams",
        description: "Use admin controls, onboarding, offboarding, and audit features to avoid shared-password chaos at work.",
        href: "/blog/best-password-manager-for-business-2026",
        cta: "See business picks",
      },
      {
        title: "Best if you had a breach",
        description: "Pair a password manager with breach monitoring so exposed logins do not turn into account takeover.",
        href: "/blog/best-identity-theft-protection-2026",
        cta: "Add identity protection",
      },
    ],
    featuredProducts: [
      {
        name: "NordPass",
        fit: "Best value for most people who want a simple upgrade from browser autofill.",
        href: "/blog/nordpass-review-2026",
        cta: "Read NordPass review",
      },
      {
        name: "Bitwarden",
        fit: "Best if you want a strong free tier, open-source audits, and unlimited devices.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Start with Bitwarden",
      },
      {
        name: "1Password",
        fit: "Best if you are shopping for a polished family or team workflow.",
        href: "/blog/bitwarden-vs-1password-2026",
        cta: "Compare 1Password",
      },
    ],
  },
  {
    slug: "phishing",
    title: "Phishing and Scam Prevention Guides",
    shortTitle: "Phishing",
    description:
      "Learn how phishing attacks work, how to spot fake websites and messages, and what to do before a stolen password becomes a takeover.",
    intro:
      "Phishing is still the most common way attackers steal passwords, session tokens, and recovery codes. This hub collects practical guides for spotting suspicious emails, fake websites, social engineering, and account takeover warning signs.",
    categories: ["Best Practices"],
    tagMatchers: ["phishing", "fake websites", "email security", "scam", "mfa fatigue"],
    primaryCta: "Use these checks before clicking links, approving login prompts, or entering credentials on unfamiliar pages.",
  },
  {
    slug: "password-security",
    title: "Password Security Guides",
    shortTitle: "Password security",
    description:
      "Build a safer password system with strong password rules, breach response steps, 2FA, passkeys, and account recovery planning.",
    intro:
      "Strong password security is a system, not a single trick. These guides cover password reuse, credential stuffing, passkeys, two-factor authentication, breach recovery, and the account settings that prevent one leak from spreading everywhere.",
    categories: ["Password Security", "2FA", "Data Breaches"],
    tagMatchers: ["password security", "strong password", "credential stuffing", "2FA", "passkeys", "data breach", "account security"],
    primaryCta: "Begin by replacing reused passwords, then enable 2FA on email, banking, cloud storage, and social accounts.",
  },
];

const topicPriority = ["password manager", "password security", "phishing", "2fa", "data breach", "account security"];

export function getSortedPosts() {
  return [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(categories: string[]) {
  return allPosts.filter(post => categories.includes(post.category));
}

export function getPostDescription(post: PostMeta) {
  if (post.description) return post.description;
  const cleaned = post.excerpt.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 155) return cleaned;
  return `${cleaned.slice(0, 152).replace(/\s+\S*$/, "")}...`;
}

export function getHubPosts(hub: TopicHub) {
  const matchers = hub.tagMatchers.map((tag) => tag.toLowerCase());
  return getSortedPosts().filter((post) => {
    const categoryMatch = hub.categories.includes(post.category);
    const tagText = `${post.title} ${post.category} ${post.tags.join(" ")}`.toLowerCase();
    return categoryMatch || matchers.some((matcher) => tagText.includes(matcher));
  });
}

export function getRelatedPosts(post: PostMeta, count = 4) {
  const postTerms = new Set([
    post.category.toLowerCase(),
    ...post.tags.map((tag) => tag.toLowerCase()),
    ...post.title.toLowerCase().split(/[^a-z0-9]+/).filter((term) => topicPriority.includes(term)),
  ]);

  return allPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const candidateTerms = [
        candidate.category.toLowerCase(),
        ...candidate.tags.map((tag) => tag.toLowerCase()),
        ...candidate.title.toLowerCase().split(/[^a-z0-9]+/),
      ];
      const score = candidateTerms.reduce((sum, term) => sum + (postTerms.has(term) ? 1 : 0), 0);
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.candidate.date).getTime() - new Date(a.candidate.date).getTime())
    .slice(0, count)
    .map(({ candidate }) => candidate);
}

export function getHubForPost(post: PostMeta) {
  return topicHubs.find((hub) => getHubPosts(hub).some((hubPost) => hubPost.slug === post.slug));
}

export function extractFaqItems(content: string) {
  const items: Array<{ question: string; answer: string }> = [];
  const faqSection = content.match(/<h2>Frequently Asked Questions<\/h2>([\s\S]*?)(?:<h2>|$)/i);
  if (!faqSection) return items;

  const faqHtml = faqSection[1];
  const matches = faqHtml.matchAll(/<p><strong>([^<]*\?)<\/strong>\s*([\s\S]*?)<\/p>/gi);
  for (const match of matches) {
    const answer = match[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (answer) {
      items.push({
        question: match[1].trim(),
        answer,
      });
    }
  }
  return items.slice(0, 6);
}
