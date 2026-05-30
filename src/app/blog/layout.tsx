import Script from 'next/script';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
