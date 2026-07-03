import type { Metadata } from "next";
import Analytics from "./components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://strongpasswordgenerator.dev"),
  title: "Strong Password Generator | Free Security Suite",
  description: "Free password generator with advanced security analysis. Generate cryptographically secure passwords, check strength, estimate crack time, and monitor password health.",
  keywords: "password generator, password strength, security checker, password health, cryptographically secure, password entropy, crack time calculator",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Strong Password Generator | Free Security Suite",
    description: "Generate cryptographically secure passwords, with advanced security analysis.",
    url: "https://strongpasswordgenerator.dev",
    siteName: "Strong Password Generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strong Password Generator | Free Security Suite",
    description: "Generate cryptographically secure passwords with advanced security analysis. Free, no signup required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          media="print"
          data-fa-swap="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll('link[data-fa-swap]').forEach(function(l){l.media='all';});`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Strong Password Generator",
              "url": "https://strongpasswordgenerator.dev",
              "description": "Free online password generator with cryptographic security analysis, strength checking, breach monitoring, and password health dashboard.",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "publisher": {
                "@type": "Organization",
                "name": "Strong Password Generator",
                "url": "https://strongpasswordgenerator.dev"
              }
            })
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
