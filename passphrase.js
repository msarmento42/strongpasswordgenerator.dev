// Simple fallback list in case wordlist.json is unavailable
const fallbackWords = ["alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india","juliet"];

// Global variables
let wordList = fallbackWords;
let selectedSeparator = " ";
const wordCountSlider = document.getElementById("wordCount");
const wordCountValue = document.getElementById("wordCountValue");
const ppDisplay = document.getElementById("ppDisplay");
const ppEntropy = document.getElementById("ppEntropy");
const ppStrength = document.getElementById("ppStrength");
const ppStatus = document.getElementById("ppStatus");
const sepButtons = document.querySelectorAll(".button-group .btn[data-sep]");

// Load wordlist.json (prefer 70k/50k), else fallback to EFF, else fallbackWords
async function loadWordList() {
  // Try wordlist.json first
  try {
    const resp = await fetch("/wordlist.json", { cache: "no-store" });
    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data) && data.length > 10000) {
        wordList = data;
        ppStatus.textContent = `Loaded ${data.length} words.`;
        return;
      }
    }
  } catch (err) {
    console.warn("wordlist.json fetch failed", err);
  }

  // Fallback to EFF list
  try {
    const resp = await fetch("/assets/eff_large_wordlist.txt");
    if (resp.ok) {
      const text = await resp.text();
      const lines = text.trim().split(/\s+/).filter(w => /^[a-zA-Z]+$/.test(w));
      if (lines.length > 5000) {
        wordList = lines;
        ppStatus.textContent = `Loaded ${lines.length} words (EFF list).`;
        return;
      }
    }
  } catch (err) {
    console.warn("EFF list fetch failed", err);
  }

  // Fallback to built‑in list
  ppStatus.textContent = `Loaded fallback list (${fallbackWords.length} words).`;
}

// Secure random integer [0, max)
function secureRandomInt(max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

// Generate the passphrase
function generatePassphrase() {
  const count = parseInt(wordCountSlider.value, 10) || 8;
  const words = [];
  for (let i = 0; i < count; i++) {
    const idx = secureRandomInt(wordList.length);
    words.push(wordList[idx].toLowerCase());
  }
  const phrase = words.join(selectedSeparator);
  ppDisplay.textContent = phrase;

  // Entropy calculation (bits)
  const baseEntropy = Math.log2(wordList.length) * count;
  ppEntropy.textContent = `${Math.round(baseEntropy)} bits`;

  // Visual strength meter (weak <40, medium <60, strong >=60)
  ppStrength.className = "strength-fill";
  if (baseEntropy < 40) {
    ppStrength.classList.add("weak");
  } else if (baseEntropy < 60) {
    ppStrength.classList.add("medium");
  } else {
    ppStrength.classList.add("strong");
  }

  // Update slider display
  wordCountValue.textContent = count;
}

// Copy function
async function copyPassphrase() {
  const text = ppDisplay.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    showNotification();
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showNotification();
  }
}

function showNotification() {
  const note = document.getElementById("ppCopied");
  note.classList.add("show");
  setTimeout(() => note.classList.remove("show"), 2000);
}

// Event listeners
document.getElementById("ppGenerate").addEventListener("click", generatePassphrase);
document.getElementById("ppCopy").addEventListener("click", copyPassphrase);
wordCountSlider.addEventListener("input", () => {
  wordCountValue.textContent = wordCountSlider.value;
});
sepButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedSeparator = btn.getAttribute("data-sep");
    // Highlight active separator button
    sepButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    generatePassphrase();
  });
});

// Load the word list on page load
window.addEventListener("load", () => {
  loadWordList().then(generatePassphrase);
});
