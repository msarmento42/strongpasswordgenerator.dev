'use client';

import { useState, useEffect, useCallback } from 'react';

interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  passphrase: boolean;
  numbers: boolean;
  symbols: boolean;
}

interface PasswordHistory {
  password: string;
  timestamp: Date;
  strength: string;
}

const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const tips = [
  { title: "Use a Password Manager", text: "Don't memorize passwords - use a password manager like Bitwarden or 1Password to generate and store unique passwords for every site." },
  { title: "Enable 2FA Wherever Possible", text: "Two-factor authentication adds an extra layer of security. Use an authenticator app instead of SMS when available." },
  { title: "Never Reuse Passwords", text: "If one site gets breached, all your accounts are vulnerable. Use unique passwords for every account." },
  { title: "Longer is Stronger", text: "A 20-character password with only lowercase letters is often stronger than an 8-character one with special characters." },
  { title: "Passphrases Work Great", text: "Consider using random words like 'correct-horse-battery-staple' - they're easy to remember but hard to crack." },
];

export default function Home() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptions>({
    length: 20,
    uppercase: true,
    lowercase: true,
    pin: false,
    passphrase: false,
    numbers: true,
    symbols: true
  });
  const [strength, setStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState('');
  const [crackTime, setCrackTime] = useState('');
  const [history, setHistory] = useState<PasswordHistory[]>([]);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", String(!darkMode));
  };

  const calculateEntropy = useCallback((pwd: string): number => {
    let charsetSize = 0;
    if (/[a-z]/.test(pwd)) charsetSize += 26;
    if (/[A-Z]/.test(pwd)) charsetSize += 26;
    if (/[0-9]/.test(pwd)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) charsetSize += 32;
    if (charsetSize === 0) return 0;
    return pwd.length * Math.log2(charsetSize);
  }, []);

  const estimateCrackTime = useCallback((entropy: number): string => {
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
  }, []);

  const calculateStrength = useCallback((pwd: string): { score: number; label: string } => {
    const entropy = calculateEntropy(pwd);
    
    if (pwd.length === 0) return { score: 0, label: '' };
    if (entropy < 28) return { score: 1, label: 'Very Weak' };
    if (entropy < 36) return { score: 2, label: 'Weak' };
    if (entropy < 60) return { score: 3, label: 'Fair' };
    if (entropy < 80) return { score: 4, label: 'Strong' };
    return { score: 5, label: 'Very Strong' };
  }, [calculateEntropy]);

  const generatePassword = useCallback(() => {
    let charset = '';
    if (options.uppercase) charset += CHAR_SETS.uppercase;
    if (options.lowercase) charset += CHAR_SETS.lowercase;
    if (options.numbers) charset += CHAR_SETS.numbers;
    if (options.symbols) charset += CHAR_SETS.symbols;

    if (charset === '') {
      charset = CHAR_SETS.lowercase;
    }

    let pwd = '';
    const array = new Uint32Array(options.length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < options.length; i++) {
      pwd += charset[array[i] % charset.length];
    }

    setPassword(pwd);
    
    const entropy = calculateEntropy(pwd);
    const strengthResult = calculateStrength(pwd);
    setStrength(strengthResult.score);
    setStrengthLabel(strengthResult.label);
    setCrackTime(estimateCrackTime(entropy));

    setHistory(prev => {
      const newHistory = [
        { password: pwd, timestamp: new Date(), strength: strengthResult.label },
        ...prev.slice(0, 9)
      ];
      localStorage.setItem('passwordHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  }, [options, calculateEntropy, calculateStrength, estimateCrackTime]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrengthColor = () => {
    const colors = ['#ff6b6b', '#ff6b6b', '#feca57', '#feca57', '#26de81', '#26de81'];
    return colors[strength] || '#8899a6';
  };

  useEffect(() => {
    const saved = localStorage.getItem('passwordHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
    generatePassword();
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") setDarkMode(true);
  }, []);

  const optionChanged = (key: keyof PasswordOptions, value: boolean | number) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></div><h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SecurePass</h1></div>
          <a href="https://" className="text-slate-500 hover:text-white text-sm"></a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        {/* Password Display */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 bg-slate-50 border border-[#2f3640] rounded-lg px-4 py-3 text-xl font-mono text-indigo-600"
              onChange={(e) => {
                setPassword(e.target.value);
                const entropy = calculateEntropy(e.target.value);
                const strengthResult = calculateStrength(e.target.value);
                setStrength(strengthResult.score);
                setStrengthLabel(strengthResult.label);
                setCrackTime(estimateCrackTime(entropy));
              }}
            />
            <button
              onClick={copyToClipboard}
              className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
            <button
              onClick={generatePassword}
              className="bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              🎲 Generate
            </button>
          </div>

          {password && (
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Strength:</span>
                <span style={{ color: getStrengthColor() }}>{strengthLabel}</span>
              </div>
              <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{ width: `${(strength / 5) * 100}%`, backgroundColor: getStrengthColor() }}
                />
              </div>
            </div>
          )}

          {password && (
            <div className="text-sm text-slate-500">
              ⏱️ Estimated crack time: <span className="text-white">{crackTime}</span>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <h2 className="text-lg font-semibold mb-4">⚙️ Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-500 mb-2">Password Length: {options.length}</label>
              <input
                type="range"
                min="4"
                max="64"
                value={options.length}
                onChange={(e) => optionChanged('length', parseInt(e.target.value))}
                className="w-full accent-[#00d4aa]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>4</span>
                <span>64</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { key: 'uppercase', label: 'Uppercase (A-Z)' },
                { key: 'lowercase', label: 'Lowercase (a-z)' },
                { key: 'numbers', label: 'Numbers (0-9)' },
                { key: 'symbols', label: 'Symbols (!@#$%)' }
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key as keyof PasswordOptions] as boolean}
                    onChange={(e) => optionChanged(key as keyof PasswordOptions, e.target.checked)}
                    className="w-5 h-5 accent-[#00d4aa]"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Password History */}
        {history.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">📜 Password History</h2>
              <button
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem('passwordHistory');
                }}
                className="text-sm text-slate-500 hover:text-white"
              >
                Clear
              </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {history.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded font-mono text-sm"
                >
                  <span className="text-indigo-600 truncate max-w-xs">{item.password}</span>
                  <span className="text-slate-500 text-xs">{item.strength}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Password Security Tips */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <h2 className="text-lg font-semibold mb-4">🛡️ Password Security Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">💡 {tip.title}</h3>
                <p className="text-sm text-slate-500">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What is Password Entropy */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <h2 className="text-lg font-semibold mb-4">📊 What is Password Entropy?</h2>
          <div className="text-slate-500 space-y-3">
            <p>Password entropy measures how hard a password is to guess. It's measured in <strong className="text-white">bits</strong> - the higher the number, the stronger the password.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><span className="text-[#ff6b6b]">Less than 28 bits:</span> Very Weak - Can be cracked instantly</li>
              <li><span className="text-[#feca57]">28-35 bits:</span> Weak - Vulnerable to fast attacks</li>
              <li><span className="text-[#feca57]">36-59 bits:</span> Fair - Okay for low-risk accounts</li>
              <li><span className="text-[#26de81]">60-79 bits:</span> Strong - Good for most accounts</li>
              <li><span className="text-[#26de81]">80+ bits:</span> Very Strong - Excellent security</li>
            </ul>
            <p className="text-sm mt-4">This generator creates passwords with <strong className="text-white">80+ bits of entropy</strong> by default - practically uncrackable!</p>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <h2 className="text-lg font-semibold mb-4">ℹ️ About This Tool</h2>
          <div className="text-slate-500 text-sm space-y-2">
            <p>This password generator creates cryptographically secure passwords using your browser's built-in <strong className="text-white">crypto.getRandomValues()</strong> API - the same technology used by password managers and security professionals.</p>
            <p>All passwords are generated <strong className="text-white">locally on your device</strong>. Nothing is ever sent to any server.</p>
          </div>
        </div>

        {/* AdSense */}
        <div className="mt-6">
          <div className="bg-[#1a2332] py-4 rounded-lg border border-[#2f3640] text-center">
            <span className="text-slate-500 text-sm">Advertisement</span>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>🔒 Your passwords are generated locally. Nothing is sent to any server.</p>
      </footer>
    </div>
  );
}
