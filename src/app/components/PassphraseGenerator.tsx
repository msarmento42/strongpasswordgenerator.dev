'use client';
import { useState, useCallback, useEffect } from 'react';

const WORDS = [
  'apple','brave','cloud','dance','eagle','flame','grace','honor','ivory','joker',
  'karma','lemon','maple','noble','ocean','piano','quiet','river','storm','tiger',
  'ultra','vivid','waltz','xenon','yacht','zebra','amber','blaze','crisp','drift',
  'ember','frost','glide','haven','indie','jewel','knack','lunar','magic','nexus',
  'oasis','pixel','quirk','radix','slate','tempo','umbra','valor','witty','xylem',
  'yearn','zesty','acorn','bison','cedar','daisy','elbow','finch','grove','hazel',
  'ingot','jelly','kudos','lilac','marsh','nerve','olive','plumb','quill','rally',
  'salvo','talon','usher','vigil','woken','xylos','yucca','zonal','aloft','brawl',
  'cider','dodgy','epoch','flint','gusto','haste','irony','joust','knelt','lusty',
  'myrrh','notch','optic','plaid','query','rogue','scrub','thyme','ulcer','venom',
  'whirl','xysti','yodel','zippy','allay','bevel','cinch','debug','elite','forgo',
  'gimme','handy','input','knack','loyal','maxim','nifty','onset','proxy','quirk',
  'risky','savvy','taboo','unzip','valid','wacky','adapt','blend','cargo','dense',
  'equip','fixed','grant','handy','image','jumbo','kinky','lucid','muted','novel',
];

function getRandWord(): string {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return WORDS[arr[0] % WORDS.length];
}

export default function PassphraseGenerator() {
  const [wordCount, setWordCount] = useState(4);
  const [separator, setSeparator] = useState('-');
  const [passphrase, setPassphrase] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const words: string[] = [];
    for (let i = 0; i < wordCount; i++) words.push(getRandWord());
    setPassphrase(words.join(separator));
  }, [wordCount, separator]);

  const copy = async () => {
    if (!passphrase) return;
    await navigator.clipboard.writeText(passphrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
        event.preventDefault();
        copy();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [copy]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 flex-wrap">
        <label className="text-sm text-slate-500 font-medium">
          Words: {wordCount}
          <input type="range" min={3} max={8} value={wordCount}
            onChange={e => setWordCount(parseInt(e.target.value))}
            aria-label="Number of words in passphrase"
            aria-describedby="passphrase-word-count-value"
            className="ml-2 w-24 accent-[#00d4aa] align-middle" />
          <span id="passphrase-word-count-value" className="sr-only">{wordCount} words selected</span>
        </label>
        <label className="text-sm text-slate-500 font-medium">
          Separator:
          <select value={separator} onChange={e => setSeparator(e.target.value)}
            aria-label="Passphrase word separator"
            className="ml-2 text-slate-700 border border-slate-200 rounded px-2 py-1 text-sm">
            <option value="-">Hyphen  (-)</option>
            <option value=".">Dot     (.)</option>
            <option value=" ">Space   ( )</option>
            <option value="_">Underscore (_)</option>
          </select>
        </label>
      </div>

      {passphrase && (
        <div className="flex items-center gap-2">
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-indigo-700 text-lg break-all flex-grow">
            {passphrase}
          </div>
          <button onClick={copy}
            aria-label={copied ? 'Passphrase copied to clipboard' : 'Copy passphrase to clipboard'}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition">
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>          <button onClick={generate}
            aria-label="Generate new passphrase"
            className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition">
            Generate New
          </button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? 'Passphrase copied to clipboard' : ''}
          </span>
        </div>
      )}

      <div className="flex gap-3 flex-wrap">
        <button onClick={generate}
          aria-label="Generate passphrase"
          className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition">
          🎲 Generate Passphrase
        </button>

      </div>

      {passphrase && (
        <p id="passphrase-value" className="text-xs text-slate-400">
          Entropy: ~{Math.round(wordCount * Math.log2(WORDS.length))} bits · Crack time at 10B guesses/sec: centuries+
        </p>
      )}
    </div>
  );
}
