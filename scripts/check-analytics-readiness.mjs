import fs from 'node:fs';
import path from 'node:path';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const analyticsPath = path.join(process.cwd(), 'src/lib/analytics.ts');
const analyticsSource = fs.readFileSync(analyticsPath, 'utf8');

const requiredActions = [
  'generator_success',
  'copy',
  'regenerate',
  'recommendation_view',
  'affiliate_click',
  'newsletter_view',
  'newsletter_action',
];
const forbiddenKeys = ['password', 'passphrase', 'checkerInput', 'entropyInput', 'email'];

const allowedKeysMatch = analyticsSource.match(
  /export const ALLOWED_EVENT_KEYS = \[([\s\S]*?)\] as const;/,
);

if (!allowedKeysMatch) {
  console.error('Analytics readiness: FAIL — shared allowed-key contract was not found.');
  process.exitCode = 1;
} else {
  const allowedKeys = [...allowedKeysMatch[1].matchAll(/'([^']+)'/g)].map((match) => match[1]);
  const exposedSensitiveKeys = forbiddenKeys.filter((key) => allowedKeys.includes(key));
  if (exposedSensitiveKeys.length > 0) {
    console.error('Analytics readiness: FAIL — the event contract permits a forbidden sensitive key.');
    process.exitCode = 1;
  }
}

const missingActions = requiredActions.filter((action) => !analyticsSource.includes(`'${action}'`));
if (missingActions.length > 0) {
  console.error('Analytics readiness: FAIL — one or more required funnel actions are missing.');
  process.exitCode = 1;
}

if (!measurementId) {
  console.error('Analytics readiness: FAIL — NEXT_PUBLIC_GA_MEASUREMENT_ID is not configured.');
  process.exitCode = 1;
} else if (!/^G-[A-Z0-9]+$/.test(measurementId)) {
  console.error('Analytics readiness: FAIL — NEXT_PUBLIC_GA_MEASUREMENT_ID has an invalid format.');
  process.exitCode = 1;
}

if (!process.exitCode) {
  console.log('Analytics readiness: PASS — GA is configured and the funnel contract is privacy-safe.');
}
