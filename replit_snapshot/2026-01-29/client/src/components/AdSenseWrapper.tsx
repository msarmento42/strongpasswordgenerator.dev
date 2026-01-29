import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * AdSenseWrapper
 * 
 * Conditionally manages the Google AdSense Auto Ads script.
 * 
 * - Auto Ads script is intentionally only present on content-rich pages.
 * - Non-content pages (Privacy, Terms, Contact, etc.) use a no-ads layout for policy compliance.
 */
export function AdSenseWrapper() {
  const [location] = useLocation();

  useEffect(() => {
    // Monetized routes that SHOULD load Auto Ads
    const isMonetized = 
      location === "/" ||
      location === "/passphrases" ||
      location === "/strength-checker" ||
      location === "/faq" ||
      location === "/guides" ||
      location.startsWith("/guides/");

    const scriptId = "adsense-auto-ads";
    const existingScript = document.getElementById(scriptId);

    if (isMonetized) {
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
        console.log("AdSense script injected for monetized route:", location);
      }
    } else {
      if (existingScript) {
        existingScript.remove();
        console.log("AdSense script removed for non-monetized route:", location);
      }
    }
  }, [location]);

  return null;
}