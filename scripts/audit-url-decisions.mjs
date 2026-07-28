import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = 'https://strongpasswordgenerator.dev';
const POSTS_DIR = 'src/posts';
const INDEX_PATH = path.join(POSTS_DIR, 'index.json');
const SITEMAP_PATH = 'src/app/sitemap.ts';
const JSON_PATH = 'docs/URL_DECISION_MANIFEST.json';
const MARKDOWN_PATH = 'docs/URL_DECISION_MANIFEST.md';
const AFFILIATE_HOSTS = ['awin1.com', 'kqzyfj.com', 'nordpass.com', 'nordvpn.com', 'coveron.com'];

const REWRITE = new Set([
  'how-to-create-strong-password', 'password-reuse-risks', 'credential-stuffing-explained',
  'two-factor-authentication-guide', 'passkeys-explained', 'passkeys-vs-passwords-2026',
  'data-breach-what-to-do', 'what-is-phishing-and-how-to-avoid-it', 'how-to-spot-fake-websites',
  'bitwarden-setup-guide', 'password-manager-vs-browser-autofill', 'free-vs-paid-password-managers-2026',
  'best-password-manager-for-families-2026', 'best-password-manager-for-business-2026',
  'best-password-manager-iphone-ios-2026', 'bitwarden-vs-1password-2026', 'google-password-manager-review',
  'nordpass-review-2026', 'nordpass-vs-dashlane-2026', 'lastpass-alternatives',
  'how-to-share-passwords-safely', 'password-hygiene-for-families', 'password-security-for-seniors',
  'password-security-for-remote-workers', 'public-wifi-security-tips', 'securing-your-email-account',
  'securing-social-media-accounts', 'securing-online-banking', 'browser-security-settings',
  'securing-apple-id',
]);

const OFF_TOPIC_REMOVE = new Set([
  'ai-voice-cloning-scams', 'antivirus-software-guide', 'best-antivirus-software-2026',
  'encrypted-messaging-apps-guide', 'github-security-best-practices', 'protecting-kids-online',
  'securing-cloud-storage', 'securing-crypto-wallets', 'securing-remote-desktop-rdp',
  'securing-smart-home-devices', 'wordpress-security-passwords', 'zero-trust-security-basics',
]);

const NON_EQUIVALENT_REMOVE = new Set([
  'best-identity-theft-protection-2026', 'nordprotect-review-2026', 'what-is-nordprotect',
  'nordvpn-review-2026', 'nordvpn-vs-expressvpn', 'vpn-worth-it-2026',
  'vpn-vs-password-manager', 'securing-your-amazon-account',
]);

const CONSOLIDATE = new Map(Object.entries({
  'password-manager-for-business': 'best-password-manager-for-business-2026',
  'password-manager-for-college-students': 'free-vs-paid-password-managers-2026',
  'google-authenticator-vs-authy': 'two-factor-authentication-guide',
  'microsoft-authenticator-guide': 'two-factor-authentication-guide',
  'yubikey-setup-guide': 'two-factor-authentication-guide',
  'mfa-fatigue-attack-explained': 'two-factor-authentication-guide',
  'data-broker-opt-out-guide': 'data-breach-what-to-do',
  'how-to-recover-from-identity-theft': 'data-breach-what-to-do',
  'identity-theft-protection-guide': 'data-breach-what-to-do',
  'identity-theft-statistics-2026': 'data-breach-what-to-do',
  'dark-web-monitoring-explained': 'data-breach-what-to-do',
  'how-to-freeze-your-credit': 'data-breach-what-to-do',
  'how-to-use-a-vpn-for-privacy': 'public-wifi-security-tips',
  'vpn-for-remote-work': 'public-wifi-security-tips',
  'email-security-best-practices-2026': 'securing-your-email-account',
  'securing-google-account': 'securing-your-email-account',
  'microsoft-account-security-guide': 'securing-your-email-account',
  'securing-facebook-account': 'securing-social-media-accounts',
  'securing-linkedin-account': 'securing-social-media-accounts',
  'securing-venmo-cashapp-paypal': 'securing-online-banking',
  'wifi-password-best-practices': 'public-wifi-security-tips',
  'securing-home-network': 'browser-security-settings',
  'android-password-tips': 'how-to-create-strong-password',
  'iphone-password-security': 'securing-apple-id',
  'password-security-audit-checklist': 'how-to-create-strong-password',
  'how-to-check-if-youve-been-hacked': 'data-breach-what-to-do',
  'qr-code-scam-quishing-guide': 'what-is-phishing-and-how-to-avoid-it',
  'sim-swapping-protection': 'two-factor-authentication-guide',
}));

const CLUSTERS = [
  { name: 'business password managers', destination: '/blog/best-password-manager-for-business-2026', sources: ['/blog/password-manager-for-business'] },
  { name: 'authenticators and 2FA', destination: '/blog/two-factor-authentication-guide', sources: [...CONSOLIDATE].filter(([, d]) => d === 'two-factor-authentication-guide').map(([s]) => `/blog/${s}`).sort() },
  { name: 'breach and identity response', destination: '/blog/data-breach-what-to-do', sources: [...CONSOLIDATE].filter(([, d]) => d === 'data-breach-what-to-do').map(([s]) => `/blog/${s}`).sort() },
  { name: 'VPN and public Wi-Fi', destination: '/blog/public-wifi-security-tips', sources: [...CONSOLIDATE].filter(([, d]) => d === 'public-wifi-security-tips').map(([s]) => `/blog/${s}`).sort() },
  { name: 'account-specific security', destination: 'multiple retained account guides', sources: [...CONSOLIDATE].filter(([, d]) => ['securing-your-email-account', 'securing-social-media-accounts', 'securing-online-banking'].includes(d)).map(([s]) => `/blog/${s}`).sort() },
  { name: 'network and browser security', destination: '/blog/browser-security-settings', sources: [...CONSOLIDATE].filter(([, d]) => d === 'browser-security-settings').map(([s]) => `/blog/${s}`).sort() },
];

function visibleWords(html = '') {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').trim().split(/\s+/).filter(Boolean).length;
}

function hrefs(html = '') {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function isAffiliate(url) {
  return AFFILIATE_HOSTS.some((host) => url.includes(host));
}

function escapeCell(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
}

async function json(file) {
  try { return JSON.parse(await readFile(file, 'utf8')); }
  catch (error) { throw new Error(`${file}: ${error.message}`); }
}

async function main() {
  const index = await json(INDEX_PATH);
  if (!Array.isArray(index)) throw new Error(`${INDEX_PATH} must be an array`);
  const files = (await readdir(POSTS_DIR)).filter((file) => file.endsWith('.json') && file !== 'index.json').sort();
  const slugs = index.map((post) => post.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error('Article index contains duplicate slugs');
  const expectedFiles = slugs.map((slug) => `${slug}.json`).sort();
  if (JSON.stringify(files) !== JSON.stringify(expectedFiles)) throw new Error('Article records and files are not a one-to-one match');

  const sitemapSource = await readFile(SITEMAP_PATH, 'utf8');
  const staticSection = sitemapSource.split('export default function sitemap')[0];
  const staticPaths = [...staticSection.matchAll(/url:\s*(?:BASE_URL|`\$\{BASE_URL\})([^`]*?)`?,/g)]
    .map((match) => match[1] || '/').map((route) => route || '/');
  if (!staticPaths.includes('/') || staticPaths.length !== 12) throw new Error(`Expected 12 static sitemap routes, found ${staticPaths.length}`);

  const articleRows = [];
  for (const record of index) {
    const post = await json(path.join(POSTS_DIR, `${record.slug}.json`));
    if (post.slug !== record.slug) throw new Error(`${record.slug}: record/file slug mismatch`);
    const links = hrefs(post.content);
    const external = links.filter((url) => /^https?:\/\//i.test(url));
    const flags = [];
    const wordCount = visibleWords(post.content);
    const sources = external.filter((url) => !isAffiliate(url)).length;
    if (!(post.description || post.metaDescription)) flags.push('missing-description');
    if (wordCount < 800) flags.push('thin-under-800-words');
    if (links.filter((url) => url.startsWith('/')).length < 2) flags.push('few-internal-links');
    if (!sources) flags.push('no-credible-external-sources');

    if (OFF_TOPIC_REMOVE.has(record.slug)) flags.push('off-topic-reviewed-removal');

    let decision = 'remove';
    let destination = null;
    let rationale = OFF_TOPIC_REMOVE.has(record.slug)
      ? 'Explicitly reviewed as off-topic for a focused password-generation site.'
      : NON_EQUIVALENT_REMOVE.has(record.slug)
        ? 'Remove because no retained URL is a genuinely equivalent redirect destination.'
        : 'Outside the reviewed, focused editorial shortlist.';
    if (REWRITE.has(record.slug)) {
      decision = 'rewrite';
      rationale = 'Reviewed editorial shortlist aligned to core user intent.';
    } else if (CONSOLIDATE.has(record.slug)) {
      decision = 'consolidate-to';
      destination = `/blog/${CONSOLIDATE.get(record.slug)}`;
      rationale = 'Overlapping intent belongs in a stronger retained destination.';
    }
    articleRows.push({
      url: `/blog/${record.slug}`, routeKind: 'article', title: post.title || record.title,
      date: post.date || record.date, category: post.category || record.category, wordCount,
      internalLinks: links.filter((url) => url.startsWith('/')).length, credibleSources: sources,
      affiliateLinks: external.filter(isAffiliate).length, sitemapPresent: true,
      qualityFlags: flags, decision, destination, rationale,
    });
  }

  const staticRows = staticPaths.map((url) => ({
    url, routeKind: url === '/' ? 'utility' : ['about', 'contact', 'privacy', 'terms', 'editorial-policy'].some((part) => url === `/${part}`) ? 'trust' : 'hub',
    title: url === '/' ? 'Strong Password Generator' : url.slice(1).replaceAll('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    date: null, category: null, wordCount: null, internalLinks: null, credibleSources: null,
    affiliateLinks: null, sitemapPresent: true, qualityFlags: [], decision: 'keep', destination: null,
    rationale: 'Core utility, trust, or navigation route.',
  }));
  const rows = [...staticRows, ...articleRows].sort((a, b) => a.url.localeCompare(b.url));
  if (new Set(rows.map((row) => row.url)).size !== rows.length) throw new Error('Manifest URLs are not unique');
  if (rows.length !== staticPaths.length + index.length) throw new Error('Manifest does not cover every sitemap URL exactly once');
  const decisions = new Set(['keep', 'rewrite', 'consolidate-to', 'remove']);
  if (rows.some((row) => !decisions.has(row.decision))) throw new Error('Unsupported decision found');
  const rowByUrl = new Map(rows.map((row) => [row.url, row]));
  for (const slug of NON_EQUIVALENT_REMOVE) {
    if (rowByUrl.get(`/blog/${slug}`)?.decision !== 'remove') throw new Error(`${slug}: non-equivalent URL must be removed`);
  }
  for (const row of rows.filter((item) => item.decision === 'consolidate-to')) {
    const target = rowByUrl.get(row.destination);
    if (!target || !['keep', 'rewrite'].includes(target.decision)) throw new Error(`${row.url}: invalid consolidation destination ${row.destination}`);
    if (row.url === row.destination) throw new Error(`${row.url}: consolidation cannot target itself`);
  }

  const counts = Object.fromEntries([...decisions].map((decision) => [decision, rows.filter((row) => row.decision === decision).length]));
  const manifest = {
    schemaVersion: 1, site: BASE_URL,
    notice: 'Proposed classifications only. Production mutation requires a separate approved issue.',
    inventory: { staticSitemapRoutes: staticRows.length, articleRecords: articleRows.length, articleFiles: files.length, totalUrls: rows.length },
    decisionCounts: counts,
    editorialShortlist: [...REWRITE].map((slug) => `/blog/${slug}`).sort(),
    consolidationClusters: CLUSTERS,
    stopLoss: {
      day30: { search: 'At least 50 organic impressions across retained editorial URLs.', affiliate: 'At least 3 tracked outbound affiliate clicks.' },
      day60: { search: 'At least 150 organic impressions and 2 organic clicks across retained editorial URLs.', affiliate: 'At least 10 tracked outbound affiliate clicks.' },
      day90: { search: 'At least 300 organic impressions and 5 organic clicks across retained editorial URLs.', affiliate: 'At least 20 tracked outbound affiliate clicks or 1 attributed conversion.' },
      action: 'If a checkpoint misses both thresholds, stop publishing, diagnose indexing and intent fit, and consolidate or exit the underperforming cluster before investing further.',
    },
    urls: rows,
  };
  const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
  await writeFile(JSON_PATH, serialized, 'utf8');

  const markdown = [
    '# SPG URL Decision Manifest', '',
    '> Proposed classifications only. Production mutation requires a separate approved issue.', '',
    'Generated deterministically by `npm run audit:urls` from the sitemap and article inventory.', '',
    '## Summary', '',
    `- Total URLs: **${rows.length}** (${staticRows.length} static and ${articleRows.length} articles)`,
    `- Keep: **${counts.keep}**`, `- Rewrite: **${counts.rewrite}**`,
    `- Consolidate: **${counts['consolidate-to']}**`, `- Remove: **${counts.remove}**`, '',
    '## Consolidation clusters', '',
    ...CLUSTERS.flatMap((cluster) => [`### ${cluster.name}`, '', `Destination: ${cluster.destination}`, '', `Sources: ${cluster.sources.join(', ') || 'none'}`, '']),
    '## 30/60/90-day stop-loss', '',
    '| Checkpoint | Search threshold | Affiliate threshold |', '|---|---|---|',
    `| Day 30 | ${manifest.stopLoss.day30.search} | ${manifest.stopLoss.day30.affiliate} |`,
    `| Day 60 | ${manifest.stopLoss.day60.search} | ${manifest.stopLoss.day60.affiliate} |`,
    `| Day 90 | ${manifest.stopLoss.day90.search} | ${manifest.stopLoss.day90.affiliate} |`, '',
    manifest.stopLoss.action, '', '## URL inventory', '',
    '| URL | Kind | Title | Date | Category | Words | Internal | Sources | Affiliate | Sitemap | Flags | Decision | Destination |',
    '|---|---|---|---|---|---:|---:|---:|---:|---|---|---|---|',
    ...rows.map((row) => `| ${[row.url, row.routeKind, row.title, row.date ?? '—', row.category ?? '—', row.wordCount ?? '—', row.internalLinks ?? '—', row.credibleSources ?? '—', row.affiliateLinks ?? '—', row.sitemapPresent ? 'yes' : 'no', row.qualityFlags.join('; ') || 'none', row.decision, row.destination ?? '—'].map(escapeCell).join(' | ')} |`),
    '',
  ].join('\n');
  await writeFile(MARKDOWN_PATH, markdown, 'utf8');
  console.log(`Validated ${rows.length} URLs: ${counts.keep} keep, ${counts.rewrite} rewrite, ${counts['consolidate-to']} consolidate, ${counts.remove} remove`);
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
