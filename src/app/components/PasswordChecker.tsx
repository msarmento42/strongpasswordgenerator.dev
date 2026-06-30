'use client';

import { useCallback, useState } from 'react';

function calculateEntropy(pwd: string): number {
  let charsetSize = 0;
  if (/[a-z]/.test(pwd)) charsetSize += 26;
  if (/[A-Z]/.test(pwd)) charsetSize += 26;
  if (/[0-9]/.test(pwd)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) charsetSize += 32;
  if (charsetSize === 0) return 0;
  return pwd.length * Math.log2(charsetSize);
}

function estimateCrackTime(entropy: number): string {
  const guessesPerSecond = 1e10;
  const combinations = Math.pow(2, entropy);
  const seconds = combinations / guessesPerSecond / 2;

  if (seconds < 1) return 'Instantly';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
  if (seconds < 31536000 * 1e6) return `${Math.round(seconds / 31536000 / 1000)} thousand years`;
  if (seconds < 31536000 * 1e9) return `${Math.round(seconds / 31536000 / 1e6)} million years`;
  if (seconds < 31536000 * 1e12) return `${Math.round(seconds / 31536000 / 1e9)} billion years`;
  return 'Centuries+';
}

function calculateStrength(pwd: string): { score: number; label: string } {
  const entropy = calculateEntropy(pwd);

  if (pwd.length === 0) return { score: 0, label: '' };
  if (entropy < 28) return { score: 1, label: 'Very Weak: Easily Guessable' };
  if (entropy < 36) return { score: 2, label: 'Weak: Improve with more characters' };
  if (entropy < 60) return { score: 3, label: 'Good: Consider adding symbols' };
  if (entropy < 80) return { score: 4, label: 'Strong: Excellent Security' };
  return { score: 5, label: 'Excellent: Highly Secure' };
}

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strengthScore, setStrengthScore] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState('');
  const [crackTime, setCrackTime] = useState('');
  const [entropy, setEntropy] = useState(0);

  const getStrengthColor = useCallback(() => {
    const colors = ['#ff6b6b', '#ff6b6b', '#feca57', '#feca57', '#26de81', '#26de81'];
    return colors[strengthScore] || '#8899a6';
  }, [strengthScore]);

  const updatePassword = (nextPassword: string) => {
    const nextEntropy = calculateEntropy(nextPassword);
    const nextStrength = calculateStrength(nextPassword);

    setPassword(nextPassword);
    setEntropy(nextEntropy);
    setStrengthScore(nextStrength.score);
    setStrengthLabel(nextStrength.label);
    setCrackTime(estimateCrackTime(nextEntropy));
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="password-checker-input" className="block text-sm font-medium text-slate-500 mb-2">
          Password to check
        </label>
        <div className="relative">
          <input
            id="password-checker-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            aria-label="Enter password to check"
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-12 font-mono text-indigo-600"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-lg text-slate-500 hover:text-indigo-600"
          >
            {showPassword ? '🙈' : '👁'}
          </button>
        </div>
        <p className="mt-2 text-xs italic text-slate-400">
          Your password is never sent anywhere — all analysis happens locally in your browser.
        </p>
      </div>

      {password.length > 0 && (
        <div aria-live="polite" className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Strength:</span>
            <span style={{ color: getStrengthColor() }}>{strengthLabel}</span>
          </div>
          <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${(strengthScore / 5) * 100}%`, backgroundColor: getStrengthColor() }}
            />
          </div>
          <div className="grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
            <div>
              Entropy: <span className="text-slate-700">{Math.round(entropy)} bits</span>
            </div>
            <div>
              Estimated crack time: <span className="text-slate-700">{crackTime}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
