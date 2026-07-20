"use client";

import { affiliates, type AffiliateProduct } from "../../lib/affiliates";

export default function AffiliateCTA({ product }: { product: AffiliateProduct }) {
  const a = affiliates[product];
  const rel = a.monetized ? "noopener noreferrer sponsored" : "noopener noreferrer";
  const ariaLabel = a.monetized ? `${a.cta} — affiliate link` : `${a.cta} — external link`;
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <span className="inline-block text-xs font-bold uppercase tracking-wide text-indigo-500 mb-1">
          {a.badge}
        </span>
        <p className="text-sm text-slate-700 mb-3">{a.description}</p>
        <a
          href={a.url}
          target="_blank"
          rel={rel}
          aria-label={ariaLabel}
          className="inline-block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {a.cta} →
        </a>
      </div>
    </div>
  );
}
