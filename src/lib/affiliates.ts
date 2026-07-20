export const affiliates = {
  bitwarden: {
    url: process.env.NEXT_PUBLIC_BITWARDEN_AFFILIATE_URL ?? "https://bitwarden.com/?utm_source=strongpasswordgenerator",
    cta: "Get Bitwarden Free",
    badge: "Most secure",
    description: "Open-source password manager trusted by millions. Free forever.",
    monetized: Boolean(process.env.NEXT_PUBLIC_BITWARDEN_AFFILIATE_URL),
  },
  nordpass: {
    name: "NordPass",
    url: process.env.NEXT_PUBLIC_NORDPASS_AFFILIATE_URL ?? "https://www.kqzyfj.com/click-101754888-17262576",
    cta: "Try NordPass",
    badge: "Best value",
    description: "Simple, fast, and secure. Made by the team behind NordVPN.",
    monetized: true,
  },
  nordvpn: {
    url: process.env.NEXT_PUBLIC_NORDVPN_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2892161",
    cta: "Try NordVPN",
    badge: "Best for public Wi-Fi",
    description: "Encrypt traffic on public networks and add threat protection beyond passwords.",
    monetized: true,
  },
  nordprotect: {
    url: process.env.NEXT_PUBLIC_NORDPROTECT_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=123620&awinaffid=2892161",
    cta: "Try NordProtect",
    badge: "Identity protection",
    description: "Monitor breach exposure and get alerts before leaked credentials turn into account takeover.",
    monetized: true,
  },
};

export type AffiliateProduct = keyof typeof affiliates;
