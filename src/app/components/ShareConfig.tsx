'use client';

import { useEffect, useState } from 'react';

interface ShareConfigProps {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export default function ShareConfig({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: ShareConfigProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyShareUrl = async () => {
    const params = new URLSearchParams({
      length: String(length),
      uppercase: String(uppercase),
      lowercase: String(lowercase),
      numbers: String(numbers),
      symbols: String(symbols),
    });

    await navigator.clipboard.writeText(`https://strongpasswordgenerator.dev/?${params.toString()}`);
    setCopied(true);
  };

  const handlePinterestShare = () => {
    const url = window.location.href;
    const description = document.title;
    const media = '';
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`;
    window.open(pinterestUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={copyShareUrl}
        aria-label="Copy link to current password settings"
        className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        {copied ? 'Link copied!' : 'Share Config'}
      </button>
      <button
        type="button"
        onClick={handlePinterestShare}
        aria-label="Share on Pinterest"
        className="bg-[#e60023] hover:bg-[#ad081b] text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.66 8.84 8.41 9.42-.12-.8-.23-2.03.05-2.9.25-.78 1.6-4.97 1.6-4.97s-.41-.82-.41-2.02c0-1.9 1.1-3.31 2.47-3.31 1.17 0 1.73.88 1.73 1.93 0 1.18-.75 2.94-1.14 4.57-.32 1.37.69 2.48 2.04 2.48 2.45 0 4.33-2.58 4.33-6.3 0-3.3-2.37-5.6-5.76-5.6-3.92 0-6.22 2.94-6.22 5.98 0 1.19.46 2.46 1.03 3.15.11.14.13.26.09.4-.1.42-.33 1.35-.37 1.54-.06.25-.19.3-.44.18-1.64-.76-2.66-3.14-2.66-5.06 0-4.12 2.99-7.9 8.62-7.9 4.53 0 8.05 3.23 8.05 7.55 0 4.5-2.84 8.12-6.78 8.12-1.32 0-2.56-.69-2.99-1.5l-.81 3.09c-.29 1.13-1.08 2.54-1.61 3.4.12.04.24.06.37.06 4.84 0 8.76-3.92 8.76-8.76 0-4.84-3.92-8.76-8.76-8.76z"/>
        </svg>
        Pinterest
      </button>
    </div>
  );
}
