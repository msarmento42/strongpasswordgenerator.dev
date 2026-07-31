import assert from 'node:assert/strict';
import test from 'node:test';
import {
  affiliatePartnerForUrl,
  buildFunnelEvent,
  FUNNEL_ACTIONS,
  isAffiliateUrl,
  trackFunnelEvent,
  type FunnelEventContext,
} from './analytics';

test('affiliate destinations are recognized and categorized without storing the URL', () => {
  assert.equal(isAffiliateUrl('https://www.awin1.com/cread.php?awinmid=15132'), true);
  assert.equal(isAffiliateUrl('https://example.com/product', 'nofollow sponsored'), true);
  assert.equal(isAffiliateUrl('https://example.com/reference'), false);
  assert.equal(affiliatePartnerForUrl('https://www.awin1.com/cread.php?awinmid=15132'), 'nordvpn');
  assert.equal(affiliatePartnerForUrl('https://www.awin1.com/cread.php?awinmid=123620'), 'nordprotect');
  assert.equal(affiliatePartnerForUrl('https://www.kqzyfj.com/click-123'), 'nordpass');
});

test('every supported action passes the shared event contract', () => {
  for (const action of FUNNEL_ACTIONS) {
    assert.deepEqual(buildFunnelEvent({ action, page: '/', placement: 'primary_generator' }), {
      action,
      page: '/',
      placement: 'primary_generator',
    });
  }
});

test('analytics payload contains only validated categorical context', () => {
  const payload = buildFunnelEvent({
    action: 'affiliate_click',
    page: '/blog/password-managers',
    placement: 'comparison_table',
    pageIntent: 'password_manager_comparison',
    partner: 'nordpass',
  });
  assert.deepEqual(payload, {
    action: 'affiliate_click',
    page: '/blog/password-managers',
    placement: 'comparison_table',
    pageIntent: 'password_manager_comparison',
    partner: 'nordpass',
  });
});

test('forbidden and sensitive fields are rejected rather than silently emitted', () => {
  for (const forbiddenKey of ['password', 'passphrase', 'checkerInput', 'entropyInput', 'email']) {
    const unsafe = {
      action: 'copy',
      page: '/',
      placement: 'primary_generator',
      [forbiddenKey]: 'Never-collect-this-secret',
    } as unknown as FunnelEventContext;
    assert.throws(() => buildFunnelEvent(unsafe), /Unsupported analytics field/);
  }
});

test('invalid actions and non-categorical metadata are rejected', () => {
  assert.throws(
    () => buildFunnelEvent({ action: 'outbound_click', page: '/', placement: 'content' } as unknown as FunnelEventContext),
    /Unsupported analytics action/,
  );
  assert.throws(
    () => buildFunnelEvent({ action: 'copy', page: '/', placement: 'Primary Generator' }),
    /Invalid analytics placement/,
  );
});

test('missing gtag fails safely and does not break the caller', () => {
  assert.equal(trackFunnelEvent({ action: 'copy', page: '/', placement: 'primary_generator' }, {}), false);
});

test('valid events dispatch through gtag', () => {
  const calls: unknown[][] = [];
  const target = { gtag: (...args: unknown[]) => calls.push(args) };
  assert.equal(
    trackFunnelEvent({ action: 'generator_success', page: '/', placement: 'primary_generator', generator: 'password' }, target),
    true,
  );
  assert.deepEqual(calls, [[
    'event',
    'generator_success',
    { action: 'generator_success', page: '/', placement: 'primary_generator', generator: 'password' },
  ]]);
});
