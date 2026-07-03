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

  return (
    <button
      type="button"
      onClick={copyShareUrl}
      aria-label="Copy link to current password settings"
      className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-6 py-3 rounded-lg transition"
    >
      {copied ? 'Link copied!' : 'Share Config'}
    </button>
  );
}
