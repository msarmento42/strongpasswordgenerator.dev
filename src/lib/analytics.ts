export type FunnelAction =
  | 'generator_success'
  | 'copy'
  | 'regenerate'
  | 'recommendation_view'
  | 'affiliate_click'
  | 'newsletter_view'
  | 'newsletter_action';

export interface FunnelEventContext {
  action: FunnelAction;
  page: string;
  placement: string;
  generator?: 'password' | 'passphrase';
  partner?: string;
}

export function buildFunnelEvent(context: FunnelEventContext): FunnelEventContext {
  return {
    action: context.action,
    page: context.page,
    placement: context.placement,
    ...(context.generator ? { generator: context.generator } : {}),
    ...(context.partner ? { partner: context.partner } : {}),
  };
}

export function trackFunnelEvent(context: FunnelEventContext): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as Window & { gtag?: (command: string, name: string, payload: FunnelEventContext) => void }).gtag;
  gtag?.('event', context.action, buildFunnelEvent(context));
}
