import assert from 'node:assert/strict';
import test from 'node:test';
import { removeLegacyPasswordHistory } from './privacy';

test('legacy plaintext password history is removed', () => {
  const removed: string[] = [];
  removeLegacyPasswordHistory({ removeItem: (key) => removed.push(key) });
  assert.deepEqual(removed, ['passwordHistory']);
});
