// strength-checker.js — client-side estimator with entropy + crack-time hints
(() => {
  const $ = (id) => document.getElementById(id);
  const pw = $("scInput");
  const bar = $("scBar");
  const label = $("scLabel");
  const list = $("scChecklist");

  const sets = { lower:/[a-z]/, upper:/[A-Z]/, digit:/[0-9]/, symbol:/[^A-Za-z0-9]/ };

  function charsetSize(s) {
    let size = 0;
    if (sets.lower.test(s)) size += 26;
    if (sets.upper.test(s)) size += 26;
    if (sets.digit.test(s)) size += 10;
    if (sets.symbol.test(s)) size += 33;
    return Math.max(size, 1);
  }

  function entropyBits(s) {
    const N = charsetSize(s);
    return Math.round(s.length * Math.log2(N));
  }

  function crackTime(bits) {
    const guesses = Math.pow(2, bits);
    const seconds = guesses / 1e10; // 10B guesses/sec
    if (seconds < 1) return "instantly";
    const units = [["sec",1],["min",60],["hr",3600],["day",86400],["yr",31557600],["century",3155760000]];
    let t = seconds, u = "sec";
    for (const [name, div] of units) { if (t / div >= 1) { t /= div; u = name; } else break; }
    return `${t.toFixed(1)} ${u}`;
  }

  function classify(bits) {
    if (bits < 30) return ["Very Weak", 10, "#f56565"];
    if (bits < 45) return ["Weak", 35, "#f97316"];
    if (bits < 60) return ["Okay", 60, "#f59e0b"];
    if (bits < 80) return ["Strong", 85, "#22c55e"];
    return ["Very Strong", 100, "#16a34a"];
  }

  function update() {
    const s = pw.value || "";
    const bits = entropyBits(s);
    const [name, pct, color] = classify(bits);
    bar.style.width = pct + "%";
    bar.style.background = color;
    label.textContent = `${name} — ~${bits} bits, crack time ~ ${crackTime(bits)}`;

    const checks = [
      [s.length >= 12, "≥ 12 characters"],
      [sets.lower.test(s), "Has lowercase"],
      [sets.upper.test(s), "Has uppercase"],
      [sets.digit.test(s), "Has numbers"],
      [sets.symbol.test(s), "Has symbols"],
      [/(.)\1{2,}/.test(s) === false, "No long repeats"],
    ];
    list.innerHTML = checks.map(([ok, text]) =>
      `<li style="color:${ok ? '#16a34a' : '#ef4444'}">${ok ? "✓" : "✗"} ${text}</li>`
    ).join("");
  }

  pw?.addEventListener("input", update);
  window.addEventListener("load", update);
})();
