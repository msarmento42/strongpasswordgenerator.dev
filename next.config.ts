import type { NextConfig } from "next";
import urlDecisionManifest from "./docs/URL_DECISION_MANIFEST.json";

const consolidationRedirects = urlDecisionManifest.urls
  .filter((entry) => entry.decision === "consolidate-to")
  .map((entry) => {
    if (!entry.destination) return null;
    return {
      source: entry.url,
      destination: entry.destination,
      permanent: true,
    };
  })
  .filter((entry): entry is { source: string; destination: string; permanent: boolean } => entry !== null);

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return consolidationRedirects;
  },
};

export default nextConfig;
