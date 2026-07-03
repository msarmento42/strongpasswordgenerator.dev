import Link from "next/link";

const familyMatchers = ["family", "kids", "seniors", "iphone", "android"];
const businessMatchers = ["business", "remote work", "teams", "github", "wordpress"];
const identityMatchers = ["identity", "breach", "dark web", "credit", "hacked"];
const vpnMatchers = ["vpn", "public wifi", "remote work", "privacy", "network"];

export default function MoneyNextStep({ tags, category }: { tags: string[]; category: string }) {
  const topicText = `${category} ${tags.join(" ")}`.toLowerCase();
  const target = familyMatchers.some((term) => topicText.includes(term))
    ? {
        href: "/blog/best-password-manager-for-families-2026",
        label: "Compare family password managers",
        body: "Shared family vaults, emergency access, and safe credential handoff matter more than raw feature lists.",
      }
    : businessMatchers.some((term) => topicText.includes(term))
      ? {
          href: "/blog/best-password-manager-for-business-2026",
          label: "Compare business password managers",
          body: "If passwords touch a team, choose a manager with admin controls, audit logs, and fast offboarding.",
        }
      : identityMatchers.some((term) => topicText.includes(term))
        ? {
            href: "/blog/best-identity-theft-protection-2026",
            label: "Compare identity protection tools",
            body: "Breach alerts and recovery support are most useful before a leaked credential turns into account takeover.",
          }
        : vpnMatchers.some((term) => topicText.includes(term))
          ? {
              href: "/blog/nordvpn-review-2026",
              label: "Review VPN protection",
              body: "A password manager protects accounts. A VPN protects traffic when you are on public or untrusted networks.",
            }
          : {
              href: "/recommended-tools",
              label: "See recommended security tools",
              body: "Use the generator for new credentials, then store them in a manager built for long-term password hygiene.",
            };

  return (
    <section className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Recommended next step</p>
      <h2 className="mt-1 text-lg font-bold text-slate-800">{target.label}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{target.body}</p>
      <Link
        href={target.href}
        className="mt-4 inline-block rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        {target.label} →
      </Link>
    </section>
  );
}
