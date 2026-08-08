import { affiliates } from "./affiliates";

export interface CommerceCard {
  title: string;
  body: string;
  href: string;
  cta: string;
  external?: boolean;
  monetized?: boolean;
}

export interface ArticleCommerceGuide {
  eyebrow: string;
  title: string;
  summary: string;
  cards: CommerceCard[];
  followUpTitle: string;
  followUps: CommerceCard[];
}

export const articleCommerceGuides: Record<string, ArticleCommerceGuide> = {
  "free-vs-paid-password-managers-2026": {
    eyebrow: "Upgrade path",
    title: "Pay only when the upgrade solves a real problem",
    summary: "Free plans are enough for many people. The paid tier becomes worth it when you need smoother multi-device use, sharing, or faster breach alerts.",
    cards: [
      {
        title: "Stay with Bitwarden if cost is the only concern",
        body: "Best if you want unlimited devices and strong fundamentals without adding another subscription.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Use Bitwarden free",
      },
      {
        title: "Upgrade to NordPass for the smoothest low-cost premium path",
        body: "The easiest paid step up if you want polished apps, unlimited active devices, and better breach reporting.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Choose 1Password if family sharing is the reason you are paying",
        body: "Worth the higher price if recovery, shared vaults, and household setup are the real goal.",
        href: "/blog/best-password-manager-for-families-2026",
        cta: "Compare family options",
      },
    ],
    followUpTitle: "Keep comparing the right way",
    followUps: [
      {
        title: "Browser autofill vs a dedicated manager",
        body: "Helpful if you are still deciding whether you need to upgrade at all.",
        href: "/blog/password-manager-vs-browser-autofill",
        cta: "See the difference",
      },
      {
        title: "Best tools across all security categories",
        body: "Use this if you want to pair password hygiene with identity or network protection.",
        href: "/recommended-tools",
        cta: "Open recommended tools",
      },
    ],
  },
  "nordpass-review-2026": {
    eyebrow: "Best fit at a glance",
    title: "Who NordPass is best for",
    summary: "Use the review to evaluate the product, then choose the next step that matches how you actually manage passwords day to day.",
    cards: [
      {
        title: "Choose NordPass if you want the easiest upgrade",
        body: "Best for people moving off browser autofill who want a cleaner interface and built-in breach alerts.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Choose Bitwarden if free and open source matter most",
        body: "A stronger fit if you want unlimited devices without paying and do not mind a more utilitarian interface.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Start with Bitwarden",
      },
      {
        title: "Choose 1Password if you are buying for a family",
        body: "The better path when recovery, shared vaults, and smoother family administration are the deciding factors.",
        href: "/blog/best-password-manager-for-families-2026",
        cta: "Compare family plans",
      },
    ],
    followUpTitle: "Keep shopping the right way",
    followUps: [
      {
        title: "Free vs paid password managers",
        body: "See what premium tiers actually add before you spend money.",
        href: "/blog/free-vs-paid-password-managers-2026",
        cta: "Compare free vs paid",
      },
      {
        title: "Password manager vs browser autofill",
        body: "Useful if you are still deciding whether a dedicated manager is worth the switch.",
        href: "/blog/password-manager-vs-browser-autofill",
        cta: "See the tradeoffs",
      },
    ],
  },
  "best-password-manager-for-families-2026": {
    eyebrow: "Decision guide",
    title: "Pick the family setup that will actually get used",
    summary: "Most families do better with the easiest product to adopt consistently than the most technical feature list on paper.",
    cards: [
      {
        title: "1Password for the smoothest family rollout",
        body: "Best all-around choice if recovery, polished apps, and household sharing are the priority.",
        href: "https://1password.com",
        cta: "Try 1Password Families",
        external: true,
      },
      {
        title: "NordPass for simpler onboarding",
        body: "A strong option if you want a cleaner interface and easier adoption for less technical relatives.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass Family",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Bitwarden for the lowest long-term cost",
        body: "Best if one person in the house is comfortable owning setup and teaching everyone else.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Start with Bitwarden",
      },
    ],
    followUpTitle: "After you pick a family manager",
    followUps: [
      {
        title: "Create stronger shared logins",
        body: "Replace reused streaming, email, and utility passwords first.",
        href: "/",
        cta: "Generate stronger passwords",
      },
      {
        title: "Lock down the household’s key accounts",
        body: "Use the broader security checklist once the vault is in place.",
        href: "/blog/password-security",
        cta: "Open the security hub",
      },
    ],
  },
  "best-password-manager-for-business-2026": {
    eyebrow: "Buying guide",
    title: "Choose based on rollout friction, not just feature count",
    summary: "For most small teams, the right choice comes down to admin clarity, SSO needs, and whether employees will actually use the tool every day.",
    cards: [
      {
        title: "1Password for the best admin experience",
        body: "Best all-around if you want a polished rollout and strong day-one usability for mixed-skill teams.",
        href: "https://1password.com",
        cta: "Try 1Password Teams",
        external: true,
      },
      {
        title: "NordPass if you need SSO sooner",
        body: "A strong value if you want SSO support without jumping to a more expensive enterprise tier immediately.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass Business",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Bitwarden if auditability matters most",
        body: "The better fit for technical teams that care about open-source transparency or self-hosting.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Review Bitwarden",
      },
    ],
    followUpTitle: "Next steps for a safer rollout",
    followUps: [
      {
        title: "Pair it with 2FA",
        body: "A team password manager is much stronger when key accounts also require a second factor.",
        href: "/blog/google-authenticator-vs-authy",
        cta: "Choose a 2FA app",
      },
      {
        title: "Clean up reused credentials",
        body: "Start the rollout by fixing the passwords most likely to lead to account takeover.",
        href: "/blog/credential-stuffing-explained",
        cta: "See the risk",
      },
    ],
  },
  "password-manager-vs-browser-autofill": {
    eyebrow: "Fast answer",
    title: "When it makes sense to move past browser storage",
    summary: "Browser autofill is a decent starting point, but a dedicated manager usually wins once you care about cross-device consistency, sharing, or stronger recovery options.",
    cards: [
      {
        title: "Keep browser autofill if you are just stopping password reuse",
        body: "A reasonable temporary step if the alternative is still memorizing or reusing passwords everywhere.",
        href: "/blog/how-to-create-strong-password",
        cta: "Build better password habits",
      },
      {
        title: "Switch to NordPass for the easiest dedicated upgrade",
        body: "Best if you want the familiar autofill experience with cleaner cross-platform support and breach alerts.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Choose Bitwarden if you want a stronger free option",
        body: "A better fit if open source and unlimited devices matter more than polished UI.",
        href: "/blog/bitwarden-setup-guide",
        cta: "Start with Bitwarden",
      },
    ],
    followUpTitle: "Once you switch",
    followUps: [
      {
        title: "Free vs paid password managers",
        body: "Understand what features are actually worth paying for after the move.",
        href: "/blog/free-vs-paid-password-managers-2026",
        cta: "Compare tiers",
      },
      {
        title: "Password manager buying hub",
        body: "Browse the full cluster of comparisons, reviews, and setup guides.",
        href: "/blog/password-managers",
        cta: "Open the hub",
      },
    ],
  },
  "vpn-vs-password-manager": {
    eyebrow: "Choose your first layer",
    title: "Start with the tool that closes your biggest gap",
    summary: "If you are deciding where to spend first, the right answer usually depends on whether your bigger risk is reused credentials or untrusted networks.",
    cards: [
      {
        title: "Start with NordPass if your passwords are still reused",
        body: "Best first purchase for most people because account takeover risk is usually more immediate than network interception.",
        href: affiliates.nordpass.url,
        cta: "Start with NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Add NordVPN if you travel or use public Wi-Fi often",
        body: "The stronger next step if you work remotely, use coffee shop Wi-Fi, or want to reduce ISP visibility.",
        href: affiliates.nordvpn.url,
        cta: "Try NordVPN",
        external: true,
        monetized: affiliates.nordvpn.monetized,
      },
      {
        title: "Add monitoring if a breach already happened",
        body: "Exposure is easier to contain when you also get alerts tied to identity and dark-web activity.",
        href: "/recommended-tools#identity-protection",
        cta: "Review identity protection",
      },
    ],
    followUpTitle: "Build the full stack in order",
    followUps: [
      {
        title: "Compare password managers",
        body: "Choose the manager before you start rotating critical logins.",
        href: "/blog/password-managers",
        cta: "Open manager guides",
      },
      {
        title: "Review the tools page",
        body: "See the broader stack once you know you need more than one layer.",
        href: "/recommended-tools",
        cta: "See all recommendations",
      },
    ],
  },
  "best-identity-theft-protection-2026": {
    eyebrow: "Protection stack",
    title: "Identity monitoring works best as part of a system",
    summary: "Monitoring helps you catch damage earlier, but the highest-value setup combines breach alerts, credit freezes, and stronger account security.",
    cards: [
      {
        title: "Coveron for the best value bundle",
        body: "A strong fit if you want dark-web alerts, credit monitoring, and recovery coverage without paying premium-tier pricing.",
        href: affiliates.nordprotect.url,
        cta: "Try Coveron",
        external: true,
        monetized: affiliates.nordprotect.monetized,
      },
      {
        title: "Add a password manager next",
        body: "Monitoring tells you when exposure happens. A password manager reduces the chance exposed credentials spread to other accounts.",
        href: "/blog/password-managers",
        cta: "Compare password managers",
      },
      {
        title: "Recover from an active incident",
        body: "If fraud has already started, use the recovery checklist before shopping for more tools.",
        href: "/blog/how-to-recover-from-identity-theft",
        cta: "Start recovery steps",
      },
    ],
    followUpTitle: "Do the high-impact free steps too",
    followUps: [
      {
        title: "Freeze your credit",
        body: "Still the most underused no-cost defense against new-account fraud.",
        href: "/blog/how-to-freeze-your-credit",
        cta: "Review freeze steps",
      },
      {
        title: "Harden your passwords",
        body: "Strong unique passwords keep one breach from cascading into email and banking takeover.",
        href: "/blog/how-to-create-strong-password",
        cta: "Strengthen passwords",
      },
    ],
  },
  "how-to-recover-from-identity-theft": {
    eyebrow: "Recovery support",
    title: "Contain the damage, then harden the system that failed",
    summary: "Recovery comes first, but the highest-value next step is building a setup that makes repeat fraud harder and easier to spot.",
    cards: [
      {
        title: "Use Coveron for ongoing monitoring",
        body: "Best if you want alerts, recovery support, and a simpler way to spot new exposure after the initial cleanup.",
        href: affiliates.nordprotect.url,
        cta: "Try Coveron",
        external: true,
        monetized: affiliates.nordprotect.monetized,
      },
      {
        title: "Replace reused passwords with a manager immediately",
        body: "A password manager is the fastest way to stop one exposed login from spreading to the rest of your accounts.",
        href: "/blog/password-managers",
        cta: "Choose a password manager",
      },
      {
        title: "If this started with a breach, use the prevention guide next",
        body: "Helpful for turning a one-time cleanup into a longer-term identity defense routine.",
        href: "/recommended-tools#identity-protection",
        cta: "See prevention tools",
      },
    ],
    followUpTitle: "Finish the hardening work",
    followUps: [
      {
        title: "Strengthen email and account recovery paths",
        body: "Your inbox is still the master key to most other accounts.",
        href: "/blog/email-security-best-practices-2026",
        cta: "Secure your email",
      },
      {
        title: "Open the broader password-security hub",
        body: "Use it to work through reuse, 2FA, and breach-response cleanup step by step.",
        href: "/blog/password-security",
        cta: "Open the security hub",
      },
    ],
  },
  "data-breach-what-to-do": {
    eyebrow: "Breach response stack",
    title: "Fix the exposed login first, then monitor the identity risk",
    summary: "A data breach is not solved by one password change. Rotate the exposed account, stop reuse across related accounts, and add monitoring if personal data was exposed.",
    cards: [
      {
        title: "Use NordPass to rotate exposed passwords",
        body: "Best first step when the breach included passwords or when you are not sure where credentials were reused.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Add Coveron if identity data was exposed",
        body: "A stronger fit when the breach involved your SSN, address, phone number, credit data, or other personal information.",
        href: affiliates.nordprotect.url,
        cta: "Try Coveron",
        external: true,
        monetized: affiliates.nordprotect.monetized,
      },
      {
        title: "Freeze your credit if new-account fraud is possible",
        body: "Use the free credit-freeze steps before spending on extra monitoring if the breach exposed sensitive identity details.",
        href: "/blog/how-to-freeze-your-credit",
        cta: "Review freeze steps",
      },
    ],
    followUpTitle: "Finish the cleanup",
    followUps: [
      {
        title: "Choose a password manager",
        body: "Compare the main manager options before replacing reused credentials.",
        href: "/blog/password-managers",
        cta: "Open manager guide",
      },
      {
        title: "Review identity protection tools",
        body: "Use this if the breach involved more than just an email and password.",
        href: "/recommended-tools#identity-protection",
        cta: "Compare monitoring options",
      },
    ],
  },
  "identity-theft-statistics-2026": {
    eyebrow: "Risk to action",
    title: "Turn the identity-risk data into a prevention stack",
    summary: "The useful takeaway from identity-theft statistics is practical: reduce account takeover risk, block new-account fraud, and monitor for exposed personal data.",
    cards: [
      {
        title: "Start with Coveron for monitoring and recovery support",
        body: "Best fit if your main concern is exposed personal data, dark-web alerts, or help responding to identity fraud.",
        href: affiliates.nordprotect.url,
        cta: "Try Coveron",
        external: true,
        monetized: affiliates.nordprotect.monetized,
      },
      {
        title: "Use NordPass to reduce account takeover risk",
        body: "Unique passwords prevent one leaked login from turning into access to your email, bank, shopping, or work accounts.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
      {
        title: "Freeze your credit for the strongest free defense",
        body: "A freeze is still one of the highest-impact steps against new credit accounts opened in your name.",
        href: "/blog/how-to-freeze-your-credit",
        cta: "Freeze credit safely",
      },
    ],
    followUpTitle: "Build the prevention routine",
    followUps: [
      {
        title: "Recover from active identity theft",
        body: "Use this if fraud has already started or you found accounts you did not open.",
        href: "/blog/how-to-recover-from-identity-theft",
        cta: "Open recovery checklist",
      },
      {
        title: "Review the full security stack",
        body: "Compare password, VPN, antivirus, and identity-protection options in one place.",
        href: "/recommended-tools",
        cta: "See recommended tools",
      },
    ],
  },
  "how-to-freeze-your-credit": {
    eyebrow: "Freeze plus monitor",
    title: "A credit freeze blocks new accounts; monitoring catches exposure",
    summary: "Freezing credit is the right first move for new-account fraud risk. Pair it with password cleanup and monitoring when your personal data is already circulating.",
    cards: [
      {
        title: "Freeze first if fraud is not active yet",
        body: "Use the bureau freeze process before buying anything. It directly blocks most new-credit attempts.",
        href: "/blog/how-to-freeze-your-credit",
        cta: "Follow freeze steps",
      },
      {
        title: "Use Coveron for alerts and recovery support",
        body: "Best if you want ongoing monitoring after a breach or want help spotting new exposure quickly.",
        href: affiliates.nordprotect.url,
        cta: "Try Coveron",
        external: true,
        monetized: affiliates.nordprotect.monetized,
      },
      {
        title: "Use NordPass to lock down exposed accounts",
        body: "A freeze protects credit files. A manager helps prevent credential reuse from spreading damage across accounts.",
        href: affiliates.nordpass.url,
        cta: "Try NordPass",
        external: true,
        monetized: affiliates.nordpass.monetized,
      },
    ],
    followUpTitle: "Cover the other failure modes",
    followUps: [
      {
        title: "Review identity protection",
        body: "Compare monitoring and recovery options after the freeze is in place.",
        href: "/recommended-tools#identity-protection",
        cta: "Compare tools",
      },
      {
        title: "Handle a live incident",
        body: "Use the recovery checklist if you already see fraudulent accounts, charges, or mail.",
        href: "/blog/how-to-recover-from-identity-theft",
        cta: "Start recovery",
      },
    ],
  },
};
