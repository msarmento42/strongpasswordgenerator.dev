import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}
      <Script id="income-click-tracking" strategy="afterInteractive">
        {`
          function funnelEvent(action, placement, extra) {
            if (!window.gtag) return;
            window.gtag('event', action, Object.assign({
              action: action,
              page: window.location.pathname,
              placement: placement
            }, extra || {}));
          }

          document.addEventListener('click', function(event) {
            var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
            if (!link || !window.gtag) return;

            var url;
            try {
              url = new URL(link.href);
            } catch (_) {
              return;
            }

            var isExternal = url.hostname && url.hostname !== window.location.hostname;
            var href = link.href;
            var isAffiliate = /sponsored|affiliate/i.test(link.rel || '') || /awin1|kqzyfj|cj/i.test(href);
            var partner = 'external';

            if (/kqzyfj/i.test(href)) partner = 'nordpass';
            else if (/awin1.*15132/i.test(href)) partner = 'nordvpn';
            else if (/awin1.*123620/i.test(href)) partner = 'nordprotect';
            else if (/awin1/i.test(href)) partner = 'awin';

            if (isAffiliate || isExternal) {
              var placement = link.closest('main') ? 'content' : link.closest('footer') ? 'footer' : 'site_navigation';
              if (isAffiliate) {
                funnelEvent('affiliate_click', placement, { partner: partner });
              } else {
                funnelEvent('outbound_click', placement, { link_domain: url.hostname });
              }
            }
          });

          var seenRecommendations = new WeakSet();
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (!entry.isIntersecting || seenRecommendations.has(entry.target)) return;
              seenRecommendations.add(entry.target);
              var isNewsletter = entry.target.tagName === 'IFRAME';
              funnelEvent(isNewsletter ? 'newsletter_view' : 'recommendation_view', isNewsletter ? 'homepage_newsletter' : 'affiliate_cta');
            });
          }, { threshold: 0.5 });

          document.querySelectorAll('a[rel~="sponsored"], iframe[title="Security newsletter signup"]').forEach(function(element) {
            observer.observe(element);
          });

          window.addEventListener('blur', function() {
            var active = document.activeElement;
            if (active && active.tagName === 'IFRAME' && active.title === 'Security newsletter signup') {
              funnelEvent('newsletter_action', 'homepage_newsletter');
            }
          });
        `}
      </Script>
    </>
  );
}
