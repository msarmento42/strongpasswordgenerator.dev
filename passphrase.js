// Passphrase generator script
const phraseDisplay = document.getElementById('phraseDisplay');
const generatePhraseBtn = document.getElementById('generatePhraseBtn');
const copyPhraseBtn = document.getElementById('copyPhraseBtn');
const wordCountSelect = document.getElementById('wordCount');
const useHyphenCheck = document.getElementById('useHyphen');
const capitalizeCheck = document.getElementById('capitalize');
const appendNumberCheck = document.getElementById('appendNumber');
const appendSymbolCheck = document.getElementById('appendSymbol');
const wordListStatus = document.getElementById('wordListStatus');
const entropyValue = document.getElementById('entropyValue');
const copyPhraseNotification = document.getElementById('copyPhraseNotification');

let wordList = [];
// fallback small list in case remote file not loaded
const fallbackWords = ['alpha','bravo','charlie','delta','echo','foxtrot','golf','hotel','india','juliet'];

async function loadWordList() {
  try {
    const res = await fetch('wordlist.json');
    if (!res.ok) throw new Error('HTTP error');
    const list = await res.json();
    if (Array.isArray(list) && list.length > 0) {
      // filter to alphabetic words
      wordList = list.filter(w => /^[A-Za-z]+$/.test(w));
      wordListStatus.textContent = `Loaded ${wordList.length} words`;
      return;
    }
  } catch (err) {
    // fallback
    wordList = fallbackWords;
    wordListStatus.textContent = `Using fallback list (${wordList.length} words)`;
  }
}

function secureRandomInt(max) {
  const maxUint32 = 0xffffffff;
  const bucketSize = Math.floor(maxUint32 / max) * max;
  const arr = new Uint32Array(1);
  let rand;
  do {
    window.crypto.getRandomValues(arr);
    rand = arr[0];
  } while (rand >= bucketSize);
  return rand % max;
}

function generatePassphrase() {
  const count = parseInt(wordCountSelect.value);
  const useHyphen = useHyphenCheck.checked;
  const capitalize = capitalizeCheck.checked;
  const appendNumber = appendNumberCheck.checked;
  const appendSymbol = appendSymbolCheck.checked;
  if (!wordList || wordList.length === 0) return;
  const words = [];
  for (let i = 0; i < count; i++) {
    const index = secureRandomInt(wordList.length);
    let word = wordList[index];
    if (capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    words.push(word);
  }
  let phrase = words.join(useHyphen ? '-' : ' ');
  let entropy = count * Math.log2(wordList.length);
  if (appendNumber) {
    const num = secureRandomInt(10);
    phrase += num.toString();
    entropy += Math.log2(10);
  }
  const symbols = '!@#$%^&*';
  if (appendSymbol) {
    const sym = symbols[secureRandomInt(symbols.length)];
    phrase += sym;
    entropy += Math.log2(symbols.length);
  }
  phraseDisplay.textContent = phrase;
  entropyValue.textContent = entropy.toFixed(1);
}

async function init() {
  await loadWordList();
  generatePassphrase();
}
// Passphrase generator script
const phraseDisplay = document.getElementById('phraseDisplay');
const generatePhraseBtn = document.getElementById('generatePhraseBtn');
const copyPhraseBtn = document.getElementById('copyPhraseBtn');
const wordCountSelect = document.getElementById('wordCount');
const useHyphenCheck = document.getElementById('useHyphen');
const capitalizeCheck = document.getElementById('capitalize');
const appendNumberCheck = document.getElementById('appendNumber');
const appendSymbolCheck = document.getElementById('appendSymbol');
const wordListStatus = document.getElementById('wordListStatus');
const entropyValue = document.getElementById('entropyValue');
const copyPhraseNotification = document.getElementById('copyPhraseNotification');

let wordList = [];
const fallbackWords = ['alpha','bravo','charlie','delta','echo','foxtrot','golf','hotel','india','juliet'];

async function loadWordList() {
  try {
    const res = await fetch('wordlist.json');
    if (!res.ok) throw new Error('HTTP error');
    const list = await res.json();
    if (Array.isArray(list) && list.length > 0) {
      wordList = list.filter(w => /^[A-Za-z]+$/.test(w));
      wordListStatus.textContent = `Loaded ${wordList.length} words`;
      return;
    }
  } catch (err) {
    wordList = fallbackWords;
    wordListStatus.textContent = `Using fallback list (${wordList.length} words)`;
  }
}

function secureRandomInt(max) {
  const maxUint32 = 0xffffffff;
  const bucketSize = Math.floor(maxUint32 / max) * max;
  const arr = new Uint32Array(1);
  let rand;
  do {
    window.crypto.getRandomValues(arr);
    rand = arr[0];
  } while (rand >= bucketSize);
  return rand % max;
}

function generatePassphrase() {
  const count = parseInt(wordCountSelect.value);
  const useHyphen = useHyphenCheck.checked;
  const capitalize = capitalizeCheck.checked;
  const appendNumber = appendNumberCheck.checked;
  const appendSymbol = appendSymbolCheck.checked;
  if (!wordList || wordList.length === 0) return;
  const words = [];
  for (let i = 0; i < count; i++) {
    const index = secureRandomInt(wordList.length);
    let word = wordList[index];
    if (capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    words.push(word);
  }
  let phrase = words.join(useHyphen ? '-' : ' ');
  let entropy = count * Math.log2(wordList.length);
  if (appendNumber) {
    const num = secureRandomInt(10);
    phrase += num.toString();
    entropy += Math.log2(10);
  }
  const symbols = '!@#$%^&*';
  if (appendSymbol) {
    const sym = symbols[secureRandomInt(symbols.length)];
    phrase += sym;
    entropy += Math.log2(symbols.length);
  }
  phraseDisplay.textContent = phrase;
  entropyValue.textContent = entropy.toFixed(1);
}

async function init() {
  await loadWordList();
  generatePassphrase();
}

generatePhraseBtn.addEventListener('click', generatePassphrase);
copyPhraseBtn.addEventListener('click', async () => {
  const text = phraseDisplay.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  copyPhraseNotification.classList.add('show');
  setTimeout(() => {
    copyPhraseNotification.classList.remove('show');
  }, 2000);
});
wordCountSelect.addEventListener('change', generatePassphrase);
useHyphenCheck.addEventListener('change', generatePassphrase);
capitalizeCheck.addEventListener('change', generatePassphrase);
appendNumberCheck.addEventListener('change', generatePassphrase);
appendSymbolCheck.addEventListener('change', generatePassphrase);
window.addEventListener('load', init);

// Event listeners
generatePhraseBtn.addEventListener('click', generatePassphrase);
copyPhraseBtn.addEventListener('click', async () => {
  const text = phraseDisplay.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  copyPhraseNotification.classList.add('show');
  setTimeout(() => {
    copyPhraseNotification.classList.remove('show');
  }, 2000);
});
wordCountSelect.addEventListener('change', generatePassphrase);
useHyphenCheck.addEventListener('change', generatePassphrase);
capitalizeCheck.addEventListener('change', generatePassphrase);
appendNumberCheck.addEventListener('change', generatePassphrase);
appendSymbolCheck.addEventListener('change', generatePassphrase);
window.addEventListener('load', init);
