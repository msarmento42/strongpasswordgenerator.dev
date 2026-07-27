import assert from 'node:assert/strict';
import test from 'node:test';
import { buildFunnelEvent } from './analytics';

test('analytics payload exposes only defined, non-secret context', () => {
  const unsafeInput = {
    action: 'copy' as const,
    page: '/',
    placement: 'primary_generator',
    generator: 'password' as const,
    password: 'Never-collect-this-secret',
  };
  const payload = buildFunnelEvent(unsafeInput);
  assert.deepEqual(payload, { action: 'copy', page: '/', placement: 'primary_generator', generator: 'password' });
  assert.equal(JSON.stringify(payload).includes('Never-collect'), false);
});
