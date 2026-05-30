import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strong Password Generator | Free Security Suite",
  description: "Free password generator with advanced security analysis. Generate cryptographically secure passwords, check strength, estimate crack time, and monitor password health.",
  keywords: "password generator, password strength, security checker, password health, cryptographically secure, password entropy, crack time calculator",
  openGraph: {
    title: "Strong Password Generator | Free Security Suite",
    description: "Generate cryptographically secure passwords with advanced security analysis.",
    url: "https://strongpasswordgenerator.dev",
    siteName: "Strong Password Generator",
    type: "website",
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
        <link rel="canonical" href="https://strongpasswordgenerator.dev/" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4635403051748784" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
