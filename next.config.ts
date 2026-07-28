import type { NextConfig } from "next";
import urlDecisionManifest from "./docs/URL_DECISION_MANIFEST.json";

const consolidationRedirects = urlDecisionManifest.urls
  .filter((entry) => entry.decision === "consolidate-to")
  .map((entry) => ({
    source: entry.url,
    destination: entry.destination as string,
    permanent: true,
  }));

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return consolidationRedirects;
  },
};

export default nextConfig;
