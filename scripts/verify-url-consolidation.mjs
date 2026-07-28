import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const manifest = JSON.parse(
  await readFile('docs/URL_DECISION_MANIFEST.json', 'utf8'),
);
const postsIndex = JSON.parse(await readFile('src/posts/index.json', 'utf8'));
const nextConfig = await readFile('next.config.ts', 'utf8');
const sitemap = await readFile('src/app/sitemap.ts', 'utf8');

const articles = manifest.urls.filter((entry) => entry.routeKind === 'article');
const consolidations = articles.filter(
  (entry) => entry.decision === 'consolidate-to',
);
const removals = articles.filter((entry) => entry.decision === 'remove');
const retained = articles.filter(
  (entry) => entry.decision === 'keep' || entry.decision === 'rewrite',
);

assert.equal(consolidations.length, 28, 'Expected 28 consolidation redirects');
assert.equal(removals.length, 20, 'Expected 20 removals without redirects');
assert.equal(retained.length, 30, 'Expected 30 retained articles');

const sourceUrls = new Set(consolidations.map((entry) => entry.url));
const retainedUrls = new Set(retained.map((entry) => entry.url));
const removalUrls = new Set(removals.map((entry) => entry.url));

for (const entry of consolidations) {
  assert.ok(entry.destination, `Missing destination for ${entry.url}`);
  assert.notEqual(entry.url, entry.destination, `Self redirect at ${entry.url}`);
  assert.ok(
    retainedUrls.has(entry.destination),
    `Redirect destination is not retained: ${entry.destination}`,
  );
  assert.ok(
    !sourceUrls.has(entry.destination),
    `Redirect chain detected: ${entry.url} -> ${entry.destination}`,
  );
  assert.ok(
    !removalUrls.has(entry.destination),
    `Redirect points to removed URL: ${entry.destination}`,
  );
}

const indexedUrls = postsIndex.map((post) => `/blog/${post.slug}`);
assert.equal(
  new Set(indexedUrls).size,
  indexedUrls.length,
  'Duplicate slug in article index',
);
assert.deepEqual(
  [...indexedUrls].sort(),
  [...retainedUrls].sort(),
  'Article index must contain exactly the retained manifest URLs',
);

const postFiles = (await readdir('src/posts'))
  .filter((file) => file.endsWith('.json') && file !== 'index.json')
  .map((file) => `/blog/${file.slice(0, -5)}`)
  .sort();
assert.deepEqual(
  postFiles,
  [...retainedUrls].sort(),
  'Article files must contain exactly the retained manifest URLs',
);

for (const url of [...sourceUrls, ...removalUrls]) {
  assert.ok(!indexedUrls.includes(url), `Pruned URL remains indexed: ${url}`);
  assert.ok(!postFiles.includes(url), `Pruned URL source remains: ${url}`);
}

assert.match(
  nextConfig,
  /urlDecisionManifest\.urls[\s\S]*entry\.decision === "consolidate-to"/,
  'Next config redirects must be derived from consolidate-to manifest entries',
);
assert.match(
  nextConfig,
  /source: entry\.url[\s\S]*destination: entry\.destination[\s\S]*permanent: true/,
  'Manifest redirects must preserve source, destination, and permanence',
);
assert.match(
  sitemap,
  /postsIndex\.map/,
  'Sitemap article inventory must be derived from the pruned article index',
);

console.log(
  `Verified ${retained.length} retained articles, ${consolidations.length} permanent redirects, and ${removals.length} removals.`,
);
