export const affiliates = {
  bitwarden: {
    url: process.env.NEXT_PUBLIC_BITWARDEN_AFFILIATE_URL ?? "https://bitwarden.com/?utm_source=strongpasswordgenerator",
    cta: "Get Bitwarden Free",
    badge: "Most secure",
    description: "Open-source password manager trusted by millions. Free forever."
  },
  nordpass: {
    url: process.env.NEXT_PUBLIC_NORDPASS_AFFILIATE_URL ?? "https://www.kqzyfj.com/click-101754888-17262576",
    cta: "Try NordPass",
    badge: "Best value",
    description: "Simple, fast, and secure. Made by the team behind NordVPN."
  },
  nordvpn: {
    url: process.env.NEXT_PUBLIC_NORDVPN_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2892161",
    cta: "Try NordVPN",
    badge: "Best for public Wi-Fi",
    description: "Encrypt traffic on public networks and add threat protection beyond passwords."
  },
  nordprotect: {
    url: process.env.NEXT_PUBLIC_NORDPROTECT_AFFILIATE_URL ?? "https://www.awin1.com/cread.php?awinmid=123620&awinaffid=2892161",
    cta: "Try NordProtect",
    badge: "Identity protection",
    description: "Monitor breach exposure and get alerts before leaked credentials turn into account takeover."
  }
};

export type AffiliateProduct = keyof typeof affiliates;