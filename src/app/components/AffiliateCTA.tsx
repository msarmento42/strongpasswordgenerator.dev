"use client";

const affiliates = {
  bitwarden: {
    url: process.env.NEXT_PUBLIC_BITWARDEN_AFFILIATE_URL ?? "https://bitwarden.com",
    cta: "Get Bitwarden Free",
    badge: "Most secure",
    description: "Open-source password manager trusted by millions. Free forever.",
  },
  nordpass: {
    url: process.env.NEXT_PUBLIC_NORDPASS_AFFILIATE_URL ?? "https://www.kqzyfj.com/click-101754888-17262576",
    cta: "Try NordPass",
    badge: "Best value",
    description: "Simple, fast, and secure. Made by the team behind NordVPN.",
  },
  nordvpn: {
    url: process.env.NEXT_PUBLIC_NORDVPN_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2892161",
    cta: "Try NordVPN",
    badge: "Best for public Wi-Fi",
    description: "Encrypt traffic on public networks and add threat protection beyond passwords.",
  },
  nordprotect: {
    url: process.env.NEXT_PUBLIC_NORDPROTECT_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=123620&awinaffid=2892161",
    cta: "Try NordProtect",
    badge: "Identity protection",
    description: "Monitor breach exposure and get alerts before leaked credentials turn into account takeover.",
  },
};

type Product = keyof typeof affiliates;

export default function AffiliateCTA({ product }: { product: Product }) {
  const a = affiliates[product];
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 flex items-start gap-4">
      <div className="flex-1">
        <span className="inline-block text-xs font-bold uppercase tracking-wide text-indigo-500 mb-1">
          {a.badge}
        </span>
        <p className="text-sm text-slate-700 mb-3">{a.description}</p>
        <a
          href={a.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`${a.cta} — affiliate link`}
          className="inline-block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {a.cta} →
        </a>
      </div>
    </div>
  );
}
