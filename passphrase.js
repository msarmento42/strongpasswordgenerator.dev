<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Generate memorable, secure passphrases from a large, profanity-filtered word list. All local, private, and free." />
  <link rel="canonical" href="https://strongpasswordgenerator.dev/passphrase.html" />
  <title>Passphrase Generator — Memorable & Secure</title>

  <!-- Perf: preconnect for AdSense/doubleclick -->
  <link rel="preconnect" href="https://pagead2.googlesyndication.com">
  <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossorigin>

  <!-- Open Graph / Twitter -->
  <meta property="og:title" content="Secure Passphrase Generator" />
  <meta property="og:description" content="Create 4–8 word passphrases from a profanity-filtered list. Generated locally in your browser." />
  <meta property="og:url" content="https://strongpasswordgenerator.dev/passphrase.html" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Secure Passphrase Generator" />
  <meta name="twitter:description" content="Create 4–8 word passphrases from a profanity-filtered list. Generated locally in your browser." />

  <link rel="stylesheet" href="/styles.css" />
  <link rel="manifest" href="/manifest.webmanifest" />

  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
    }
  </script>

  <!-- Google AdSense - Auto Ads -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696" crossorigin="anonymous"></script>
</head>
<body>
  <div class="container">
    <header>
      <nav style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
        <h1>🧩 Passphrase Generator</h1>
        <div style="display:flex;gap:14px;">
          <a class="nav" href="/index.html">Passwords</a>
          <a class="nav" href="/passphrase.html">Passphrases</a>
        </div>
      </nav>
      <p class="subtitle">Create <strong>4–8 word</strong> passphrases from a large, profanity-filtered list (default 8 words)</p>
    </header>

    <main>
      <div class="password-display-section">
        <div class="password-display" id="ppDisplay">Click "Generate Passphrase" to start</div>
        <div class="button-group">
          <button class="btn btn-primary" id="ppGenerate">Generate Passphrase</button>
          <button class="btn btn-secondary" id="ppCopy">Copy</button>
        </div>
        <div class="copy-notification" id="ppCopied">Copied to clipboard! ✓</div>
      </div>

      <div class="options-section">
        <h2>Options</h2>
        <div class="option">
          <label for="wordCount">Words: <span id="wordCountValue">8</span></label>
          <input id="wordCount" type="range" min="4" max="8" value="8" />
        </div>
        <div class="option"><label for="separator">Separator</label></div>
        <div class="button-group">
          <button class="btn" data-sep=" ">space</button>
          <button class="btn" data-sep="-">-</button>
          <button class="btn" data-sep="_">_</button>
          <button class="btn" data-sep=".">.</button>
        </div>

        <div class="strength-meter">
          <p>Estimated Entropy: <strong id="ppEntropy">–</strong></p>
          <div class="strength-bar"><div class="strength-fill" id="ppStrength"></div></div>
          <p style="font-size:.9em;color:#4a5568;margin-top:8px">Tip: 6–8 words are very strong for most uses.</p>
        </div>

        <p id="ppStatus" style="margin-top:12px;color:#4a5568"></p>
      </div>
    </main>

    <footer><p>© 2025 strongpasswordgenerator.dev</p></footer>
  </div>

  <script defer src="/passphrase.js"></script>
</body>
</html>
