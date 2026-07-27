import assert from 'node:assert/strict';
import test from 'node:test';
import { CHARACTER_SETS, generateSecurePassphrase, generateSecurePassword, secureRandomIndex } from './password-generator';

function sequenceRandom(...values: number[]) {
  let index = 0;
  return (target: Uint32Array) => {
    target[0] = values[index++] ?? 0;
    return target;
  };
}

test('rejection sampling discards values outside an even sampling range', () => {
  const random = sequenceRandom(0xffffffff, 7);
  assert.equal(secureRandomIndex(10, random), 7);
});

test('generated passwords contain every enabled character class', () => {
  const password = generateSecurePassword({ length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true }, sequenceRandom());
  assert.equal(password.length, 16);
  assert.match(password, /[A-Z]/);
  assert.match(password, /[a-z]/);
  assert.match(password, /[0-9]/);
  assert.ok([...password].some((character) => CHARACTER_SETS.symbols.includes(character)));
});

test('no selected character classes falls back to lowercase', () => {
  const password = generateSecurePassword({ length: 8, uppercase: false, lowercase: false, numbers: false, symbols: false }, sequenceRandom());
  assert.match(password, /^[a-z]{8}$/);
});

test('passphrases use the same unbiased selector for every word', () => {
  const passphrase = generateSecurePassphrase(['alpha', 'bravo', 'charlie'], 3, '-', sequenceRandom(0xffffffff, 0, 1, 2));
  assert.equal(passphrase, 'alpha-bravo-charlie');
});
