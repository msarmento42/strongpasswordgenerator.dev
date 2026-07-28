export const FUNNEL_ACTIONS = [
  'generator_success',
  'copy',
  'regenerate',
  'recommendation_view',
  'affiliate_click',
  'newsletter_view',
  'newsletter_action',
] as const;

export const ALLOWED_EVENT_KEYS = [
  'action',
  'page',
  'placement',
  'pageIntent',
  'generator',
  'partner',
] as const;

export const GENERATOR_TYPES = ['password', 'passphrase'] as const;

export type FunnelAction = (typeof FUNNEL_ACTIONS)[number];
export type GeneratorType = (typeof GENERATOR_TYPES)[number];

export interface FunnelEventContext {
  action: FunnelAction;
  page: string;
  placement: string;
  pageIntent?: string;
  generator?: GeneratorType;
  partner?: string;
}

export type FunnelEventPayload = Readonly<FunnelEventContext>;
export type Gtag = (command: 'event', name: FunnelAction, payload: FunnelEventPayload) => void;

type AnalyticsTarget = { gtag?: Gtag };

const categoricalValue = /^[a-z0-9][a-z0-9_-]*$/;

function assertCategorical(name: string, value: unknown): asserts value is string {
  if (typeof value !== 'string' || value.length === 0 || value.length > 80 || !categoricalValue.test(value)) {
    throw new TypeError(`Invalid analytics ${name}`);
  }
}

export function buildFunnelEvent(context: FunnelEventContext): FunnelEventPayload {
  if (!context || typeof context !== 'object' || Array.isArray(context)) {
    throw new TypeError('Analytics event must be an object');
  }

  const keys = Object.keys(context);
  const unexpectedKey = keys.find((key) => !(ALLOWED_EVENT_KEYS as readonly string[]).includes(key));
  if (unexpectedKey) {
    throw new TypeError(`Unsupported analytics field: ${unexpectedKey}`);
  }
  if (!(FUNNEL_ACTIONS as readonly string[]).includes(context.action)) {
    throw new TypeError('Unsupported analytics action');
  }
  if (typeof context.page !== 'string' || !context.page.startsWith('/') || context.page.length > 200) {
    throw new TypeError('Invalid analytics page');
  }
  assertCategorical('placement', context.placement);

  if (context.pageIntent !== undefined) assertCategorical('pageIntent', context.pageIntent);
  if (context.partner !== undefined) assertCategorical('partner', context.partner);
  if (context.generator !== undefined && !(GENERATOR_TYPES as readonly string[]).includes(context.generator)) {
    throw new TypeError('Invalid analytics generator');
  }

  return Object.freeze({
    action: context.action,
    page: context.page,
    placement: context.placement,
    ...(context.pageIntent ? { pageIntent: context.pageIntent } : {}),
    ...(context.generator ? { generator: context.generator } : {}),
    ...(context.partner ? { partner: context.partner } : {}),
  });
}

export function trackFunnelEvent(context: FunnelEventContext, target?: AnalyticsTarget): boolean {
  try {
    const analyticsTarget = target ?? (typeof window === 'undefined' ? undefined : (window as AnalyticsTarget));
    if (!analyticsTarget?.gtag) return false;
    const payload = buildFunnelEvent(context);
    analyticsTarget.gtag('event', payload.action, payload);
    return true;
  } catch {
    return false;
  }
}

export function createBrowserFunnelScript(): string {
  const actions = JSON.stringify(FUNNEL_ACTIONS);
  const allowedKeys = JSON.stringify(ALLOWED_EVENT_KEYS);
  const generators = JSON.stringify(GENERATOR_TYPES);

  return `
    (function () {
      var actions = ${actions};
      var allowedKeys = ${allowedKeys};
      var generators = ${generators};
      var categoricalValue = /^[a-z0-9][a-z0-9_-]*$/;

      window.spgTrackFunnelEvent = function (candidate) {
        try {
          if (!window.gtag || !candidate || typeof candidate !== 'object' || Array.isArray(candidate)) return false;
          if (Object.keys(candidate).some(function (key) { return allowedKeys.indexOf(key) === -1; })) return false;
          if (actions.indexOf(candidate.action) === -1) return false;
          if (typeof candidate.page !== 'string' || candidate.page.charAt(0) !== '/' || candidate.page.length > 200) return false;
          if (typeof candidate.placement !== 'string' || !categoricalValue.test(candidate.placement) || candidate.placement.length > 80) return false;
          if (candidate.pageIntent !== undefined && (typeof candidate.pageIntent !== 'string' || !categoricalValue.test(candidate.pageIntent) || candidate.pageIntent.length > 80)) return false;
          if (candidate.partner !== undefined && (typeof candidate.partner !== 'string' || !categoricalValue.test(candidate.partner) || candidate.partner.length > 80)) return false;
          if (candidate.generator !== undefined && generators.indexOf(candidate.generator) === -1) return false;

          var payload = {};
          allowedKeys.forEach(function (key) {
            if (candidate[key] !== undefined) payload[key] = candidate[key];
          });
          window.gtag('event', payload.action, payload);
          return true;
        } catch (_) {
          return false;
        }
      };
    }());
  `;
}
