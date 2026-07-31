"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  affiliatePartnerForUrl,
  isAffiliateUrl,
  trackFunnelEvent,
  type FunnelEventContext,
  type Gtag,
} from "@/lib/analytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: Gtag;
    spgTrackFunnelEvent?: (context: FunnelEventContext) => boolean;
  }
}

export default function Analytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args)) as Gtag;
    window.spgTrackFunnelEvent = (context) => trackFunnelEvent(context, window);

    if (GA_MEASUREMENT_ID) {
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }

    const funnelEvent = (
      action: FunnelEventContext["action"],
      placement: string,
      extra: Partial<FunnelEventContext> = {},
    ) => window.spgTrackFunnelEvent?.({
      action,
      page: window.location.pathname,
      placement,
      ...extra,
    });

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || !isAffiliateUrl(link.href, link.rel)) return;

      const placement = link.closest("main")
        ? "content"
        : link.closest("footer")
          ? "footer"
          : "site_navigation";
      funnelEvent("affiliate_click", placement, { partner: affiliatePartnerForUrl(link.href) });
    };

    document.addEventListener("click", handleClick);

    const seenRecommendations = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seenRecommendations.has(entry.target)) return;
        seenRecommendations.add(entry.target);
        const isNewsletter = entry.target.tagName === "IFRAME";
        funnelEvent(
          isNewsletter ? "newsletter_view" : "recommendation_view",
          isNewsletter ? "homepage_newsletter" : "affiliate_cta",
        );
      });
    }, { threshold: 0.5 });

    document
      .querySelectorAll('a[rel~="sponsored"], iframe[title="Security newsletter signup"]')
      .forEach((element) => observer.observe(element));

    const handleBlur = () => {
      const active = document.activeElement;
      if (active instanceof HTMLIFrameElement && active.title === "Security newsletter signup") {
        funnelEvent("newsletter_action", "homepage_newsletter");
      }
    };
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("blur", handleBlur);
      observer.disconnect();
      delete window.spgTrackFunnelEvent;
    };
  }, []);

  return GA_MEASUREMENT_ID ? (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  ) : null;
}
