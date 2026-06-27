import AffiliateCTA from './AffiliateCTA';

export default function NordPassCTA() {
  return (
    <aside className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-2">
        Sponsored recommendation
      </p>
      <h2 className="text-lg font-bold text-slate-800 mb-2">
        Want a simpler way to manage strong passwords?
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        NordPass stores unique passwords for every account, checks password health, and alerts you when data leaks put
        accounts at risk.
      </p>
      <AffiliateCTA product="nordpass" />
      <p className="text-xs text-slate-400 mt-3">
        Affiliate disclosure: we may earn a commission if you buy through this link, at no extra cost to you.
      </p>
    </aside>
  );
}
