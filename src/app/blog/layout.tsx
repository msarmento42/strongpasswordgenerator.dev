import Script from 'next/script';
import NordPassCTA from '../components/NordPassCTA';
import AffiliateCTA from '../components/AffiliateCTA';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {children}<AffiliateCTA product="bitwarden" />
      <NordPassCTA />
      <ScrollToTopButton />
    </>
  );
}
