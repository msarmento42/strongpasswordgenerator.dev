import { access, readFile } from 'node:fs/promises';

const BASE_URL = (process.env.BASE_URL || 'https://strongpasswordgenerator.dev').replace(/\/$/, '');
const ADS_LINE = 'google.com, pub-6175161566333696, DIRECT, f08c47fec0942fa0';

const requiredFiles = [
  'public/ads.txt',
  'src/app/password-safety-checklist/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/editorial-policy/page.tsx',
];

const requiredRoutes = [
  '/',
  '/ads.txt',
  '/sitemap.xml',
  '/password-safety-checklist',
  '/about',
  '/contact',
  '/privacy',
  '/editorial-policy',
];

async function assertFile(path) {
  await access(path);
  console.log(`ok file ${path}`);
}

async function fetchText(path) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`);
  }
  const text = await response.text();
  console.log(`ok url ${url}`);
  return text;
}

async function main() {
  for (const path of requiredFiles) {
    await assertFile(path);
  }

  const adsTxt = await readFile('public/ads.txt', 'utf8');
  if (!adsTxt.includes(ADS_LINE)) {
    throw new Error('public/ads.txt does not contain the expected AdSense publisher line');
  }
  console.log('ok local ads.txt publisher line');

  for (const route of requiredRoutes) {
    await fetchText(route);
  }

  const [homeSource, sitemap, liveAdsTxt] = await Promise.all([
    readFile('src/app/page.tsx', 'utf8'),
    fetchText('/sitemap.xml'),
    fetchText('/ads.txt'),
  ]);

  if (!homeSource.includes('/password-safety-checklist')) {
    throw new Error('Homepage source does not link to /password-safety-checklist');
  }
  if (!sitemap.includes('/password-safety-checklist')) {
    throw new Error('Sitemap does not include /password-safety-checklist');
  }
  if (!liveAdsTxt.includes(ADS_LINE)) {
    throw new Error('Live ads.txt does not contain the expected AdSense publisher line');
  }

  console.log(`AdSense readiness smoke check passed for ${BASE_URL}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
