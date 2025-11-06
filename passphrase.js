// passphrase.js — robust, crypto-secure passphrase generator with helpful logs
(() => {
  const $ = (id) => document.getElementById(id);

  const ui = {
    display: $("ppDisplay"),
    genBtn: $("ppGenBtn"),
    copyBtn: $("ppCopyBtn"),
    copyNote: $("ppCopyNote"),
    count: $("ppCount"),
    titleCase: $("ppTitleCase"),
    hyphens: $("ppHyphens"),
    number: $("ppNumber"),
    symbol: $("ppSymbol"),
  };

  console.log("[passphrase] script loaded", { haveDisplay: !!ui.display });

  let WORDS = null;
  let lastPhrase = "";

  const titleCase = (w) => (w ? w[0].toUpperCase() + w.slice(1) : w);
  const randInt = (max) => { const b = new Uint32Array(1); crypto.getRandomValues(b); return b[0] % max; };

  function secureSample(arr, k) {
    const out = [];
    const seen = new Set();
    while (out.length < k && seen.size < arr.length) {
      const idx = randInt(arr.length);
      if (!seen.has(idx)) { seen.add(idx); out.push(arr[idx]); }
    }
    return out;
  }

  async function loadWordlist() {
    if (WORDS) return WORDS;
    const v = "2025-11-06"; // bust old SW caches
    console.log("[passphrase] fetching /wordlist.json?v=" + v);
    const res = await fetch(`/wordlist.json?v=${v}`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`wordlist.json HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("wordlist.json must be an array");
    WORDS = data.filter(w => typeof w === "string" && w.trim().length > 0);
    console.log("[passphrase] word count:", WORDS.length);
    return WORDS;
  }

  function buildPhrase(words) {
    const count = parseInt(ui.count.value, 10) || 6;
    const picks = secureSample(words, count).map(w => ui.titleCase.checked ? titleCase(w) : w);
    const glue = ui.hyphens.checked ? "-" : " ";
    let phrase = picks.join(glue);
    if (ui.number.checked) { const n = randInt(100); phrase += (ui.hyphens.checked ? "-" : "") + String(n).padStart(2, "0"); }
    if (ui.symbol.checked) { const syms = "!@#$%&?*"; phrase += (ui.hyphens.checked ? "-" : "") + syms[randInt(syms.length)]; }
    return phrase;
  }

  async function generate() {
    try {
      if (!ui.display) { console.error("[passphrase] Missing #ppDisplay"); return; }
      ui.display.textContent = "Loading word list…";
      const words = await loadWordlist();
      lastPhrase = buildPhrase(words);
      ui.display.textContent = lastPhrase;
      ui.display.classList.add("generated");
    } catch (e) {
      console.error("[passphrase] generate error:", e);
      ui.display.textContent = "Error loading word list. Try Shift+Reload. If it persists, wordlist.json may be missing.";
    }
  }

  async function copy() {
    if (!lastPhrase) { ui.display.textContent = "Generate a passphrase first!"; return; }
    try {
      await navigator.clipboard.writeText(lastPhrase);
      ui.copyNote.classList.add("show");
      setTimeout(() => ui.copyNote.classList.remove("show"), 1600);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = lastPhrase; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
      ui.copyNote.classList.add("show");
      setTimeout(() => ui.copyNote.classList.remove("show"), 1600);
    }
  }

  ui.genBtn?.addEventListener("click", generate);
  ui.copyBtn?.addEventListener("click", copy);
  window.addEventListener("load", () => { console.log("[passphrase] window load — auto-generate"); generate(); });
})();
