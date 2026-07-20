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
              window.gtag('event', isAffiliate ? 'affiliate_click' : 'outbound_click', {
                link_url: link.href,
                link_domain: url.hostname,
                affiliate_partner: isAffiliate ? partner : undefined,
                link_text: (link.textContent || '').trim().slice(0, 100),
                page_location: window.location.href
              });
            }
          });
        `}
      </Script>
    </>
  );
}
