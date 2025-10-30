// Character sets
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const similar = /[O0Il1]/g;

// DOM elements
const passwordDisplay = document.getElementById('passwordDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const copyNotification = document.getElementById('copyNotification');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const excludeSimilar = document.getElementById('excludeSimilar');
const strengthText = document.getElementById('strengthText');
const strengthFill = document.getElementById('strengthFill');
const consentBanner = document.getElementById('consentBanner');
const consentBtn = document.getElementById('consentBtn');

let currentPassword = '';

// Update length display
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

function secureRand(maxExclusive) {
  const maxUint = 0xFFFFFFFF;
  const bound = Math.floor((maxUint + 1) / maxExclusive) * maxExclusive - 1;
  let r;
  const buf = new Uint32Array(1);
  do {
    crypto.getRandomValues(buf);
    r = buf[0];
  } while (r > bound);
  return r % maxExclusive;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = secureRand(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildPool() {
  const pools = [];
  if (uppercaseCheck.checked) pools.push(uppercase);
  if (lowercaseCheck.checked) pools.push(lowercase);
  if (numbersCheck.checked) pools.push(numbers);
  if (symbolsCheck.checked) pools.push(symbols);
  if (pools.length === 0) throw new Error('Please select at least one character type.');
  let all = pools.join('');
  if (excludeSimilar.checked) {
    all = all.replace(similar, '');
    for (let i = 0; i < pools.length; i++) {
      pools[i] = pools[i].replace(similar, '');
      if (!pools[i]) throw new Error('Excluding similar characters removed an entire class. Uncheck exclude or enable another class.');
    }
  }
  return { pools, all };
}

function generatePassword() {
  try {
    const { pools, all } = buildPool();
    const length = parseInt(lengthSlider.value, 10);
    const chars = [];
    for (const pool of pools) chars.push(pool[secureRand(pool.length)]);
    for (let i = chars.length; i < length; i++) chars.push(all[secureRand(all.length)]);
    const password = shuffle(chars).join('');
    currentPassword = password;
    passwordDisplay.textContent = password;
    passwordDisplay.classList.add('generated');
    updateStrength(password);
  } catch (e) {
    alert(e.message);
  }
}

function updateStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (password.length >= 16) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  strengthFill.className = 'strength-fill';
  if (strength <= 3) { strengthFill.classList.add('weak'); strengthText.textContent = 'Weak'; strengthText.style.color = '#f56565'; }
  else if (strength <= 5) { strengthFill.classList.add('medium'); strengthText.textContent = 'Medium'; strengthText.style.color = '#ed8936'; }
  else { strengthFill.classList.add('strong'); strengthText.textContent = 'Strong'; strengthText.style.color = '#48bb78'; }
}

async function copyToClipboard() {
  if (!currentPassword) { alert('Generate a password first!'); return; }
  try { await navigator.clipboard.writeText(currentPassword); }
  catch { const t=document.createElement('textarea'); t.value=currentPassword; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); }
  copyNotification.classList.add('show'); setTimeout(() => copyNotification.classList.remove('show'), 2000);
}

(function(){ try{ if(localStorage.getItem('consent_ack')==='1'){ document.getElementById('consentBanner').style.display='none'; } }catch(e){} })();
document.getElementById('consentBtn')?.addEventListener('click', () => { try{ localStorage.setItem('consent_ack','1'); }catch(e){} document.getElementById('consentBanner').style.display='none'; });

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', async()=>{ await navigator.clipboard.writeText(currentPassword).catch(()=>{}); copyNotification.classList.add('show'); setTimeout(()=>copyNotification.classList.remove('show'),2000); });
window.addEventListener('load', generatePassword);
['change'].forEach(evt => {
  uppercaseCheck.addEventListener(evt, generatePassword);
  lowercaseCheck.addEventListener(evt, generatePassword);
  numbersCheck.addEventListener(evt, generatePassword);
  symbolsCheck.addEventListener(evt, generatePassword);
  lengthSlider.addEventListener(evt, generatePassword);
  excludeSimilar.addEventListener(evt, generatePassword);
});
