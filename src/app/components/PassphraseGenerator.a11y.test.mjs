// Accessibility regression test for PassphraseGenerator.
// Uses Node's built-in test runner (no new dependencies) since this repo has
// no test framework configured. Run with: node --test src/app/components/PassphraseGenerator.a11y.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rawSource = readFileSync(join(__dirname, 'PassphraseGenerator.tsx'), 'utf8');
// Strip JSX expression containers ({...}) so embedded arrow functions (=>) don't
// confuse the tag-boundary regex below.
const source = rawSource.replace(/\{[^{}]*\}/g, '{EXPR}');

test('every interactive control (input, select, button) has an accessible name', () => {
  // Split into per-element tags so each control is checked independently
  // rather than just counting aria-label occurrences globally.
  const elementRegex = /<(input|select|button)\b[^>]*?\/?>/gs;
  const elements = source.match(elementRegex) || [];

  assert.ok(elements.length >= 4, `expected at least 4 interactive controls, found ${elements.length}`);

  for (const el of elements) {
    const hasAriaLabel = /aria-label=/.test(el);
    const hasAriaLabelledBy = /aria-labelledby=/.test(el);
    assert.ok(
      hasAriaLabel || hasAriaLabelledBy,
      `interactive control missing an accessible name (aria-label/aria-labelledby): ${el}`
    );
  }
});

test('at least 3 aria-label attributes are present (up from 0 before the a11y fix)', () => {
  const count = (source.match(/aria-label=/g) || []).length;
  assert.ok(count >= 3, `expected >= 3 aria-label attributes, found ${count}`);
});
