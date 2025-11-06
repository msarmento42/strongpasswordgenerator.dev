// Simple fallback list in case wordlist.json is unavailable
const fallbackWords = [
  "alpha",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "hotel",
  "india",
  "juliet"
];

// Elements
const ppDisplay = document.getElementById("ppDisplay");
const ppGenBtn = document.getElementById("ppGenBtn");
const ppCopyBtn = document.getElementById("ppCopyBtn");
const ppCopyNote = document.getElementById("ppCopyNote");
const wordCountSelect = document.getElementById("ppCount");
const titleCaseCheckbox = document.getElementById("ppTitleCase");
const hyphenCheckbox = document.getElementById("ppHyphens");
const numberCheckbox = document.getElementById("ppNumber");
const symbolCheckbox = document.getElementById("ppSymbol");

let wordList = fallbackWords;

async function loadWordList() {
  try {
    const resp = await fetch("/wordlist.json", { cache: "no-store" });
    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data) && data.length > 0) {
        wordList = data;
        return;
      }
    }
  } catch (err) {
    console.warn("wordlist.json fetch failed", err);
  }

  try {
    const resp = await fetch("/assets/eff_large_wordlist.txt");
    if (resp.ok) {
      const text = await resp.text();
      const lines = text
        .trim()
        .split(/\s+/)
        .filter((w) => /^[a-zA-Z]+$/.test(w));
      if (lines.length > 0) {
        wordList = lines;
        return;
      }
    }
  } catch (err) {
    console.warn("EFF list fetch failed", err);
  }

  console.warn("Using fallback word list");
}

function secureRandomInt(max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

function formatWord(word) {
  if (!titleCaseCheckbox || !titleCaseCheckbox.checked) {
    return word.toLowerCase();
  }
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function appendWithSeparator(base, addition, useHyphen) {
  if (!addition) return base;
  const separator = useHyphen ? "-" : " ";
  return base + separator + addition;
}

function generatePassphrase() {
  const count = parseInt(wordCountSelect.value, 10) || 6;
  const useHyphen = hyphenCheckbox.checked;
  const words = [];

  if (!wordList.length) {
    console.error("Word list is empty. Falling back to default list.");
    wordList = fallbackWords;
  }

  for (let i = 0; i < count; i += 1) {
    const idx = secureRandomInt(wordList.length);
    words.push(formatWord(wordList[idx]));
  }

  let phrase = words.join(useHyphen ? "-" : " ");

  if (numberCheckbox.checked) {
    const randomNumber = secureRandomInt(10); // 0-9
    phrase = appendWithSeparator(phrase, String(randomNumber), useHyphen);
  }

  if (symbolCheckbox.checked) {
    const symbols = ["!", "@", "#", "$", "%", "&", "*"];
    const randomSymbol = symbols[secureRandomInt(symbols.length)];
    phrase = appendWithSeparator(phrase, randomSymbol, useHyphen);
  }

  ppDisplay.textContent = phrase;
}

async function copyPassphrase() {
  const text = ppDisplay.textContent;
  if (!text || text === "Click \"Generate\" to start") {
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showNotification();
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showNotification();
  }
}

function showNotification() {
  if (!ppCopyNote) return;
  ppCopyNote.classList.add("show");
  setTimeout(() => {
    ppCopyNote.classList.remove("show");
  }, 2000);
}

if (ppGenBtn) {
  ppGenBtn.addEventListener("click", generatePassphrase);
}

if (ppCopyBtn) {
  ppCopyBtn.addEventListener("click", copyPassphrase);
}

if (wordCountSelect) {
  wordCountSelect.addEventListener("change", generatePassphrase);
}

[titleCaseCheckbox, hyphenCheckbox, numberCheckbox, symbolCheckbox]
  .filter(Boolean)
  .forEach((checkbox) => {
    checkbox.addEventListener("change", generatePassphrase);
  });

window.addEventListener("load", () => {
  loadWordList().then(generatePassphrase);
});
