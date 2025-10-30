# StrongPasswordGenerator.dev — Netlify CD (70k JSON + Offensive Word Filter + Offline)

No local commits required. GitHub Actions builds `assets/words-70k.json` with Python `wordfreq`, filters offensive words, and commits it. A service worker caches the core site for offline use.

## Steps
1. Upload this repo to GitHub (via UI).
2. Actions → run **Generate 70k word list**.
3. Netlify redeploys; `/passphrase.html` should show “Loaded 70k JSON word list”.

### Edit offensive-word filter
Open `.github/workflows/generate-wordlist.yml` and adjust `BLOCKLIST` in the Python step.

### Offline
`sw.js` caches static assets & pages and uses network-first for word lists with cache fallback.

### Netlify
- Build: (empty)
- Publish: `.`

### AdSense
- Auto Ads: ca-pub-6175161566333696
- `ads.txt` included.
