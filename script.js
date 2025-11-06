const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

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
const strengthText = document.getElementById('strengthText');
const strengthFill = document.getElementById('strengthFill');

let currentPassword = '';

lengthSlider.addEventListener('input', () => { lengthValue.textContent = lengthSlider.value; });

function generatePassword() {
  let charset = '';
  if (uppercaseCheck.checked) charset += uppercase;
  if (lowercaseCheck.checked) charset += lowercase;
  if (numbersCheck.checked) charset += numbers;
  if (symbolsCheck.checked) charset += symbols;
  if (charset === '') { alert('Please select at least one character type!'); return; }

  const length = parseInt(lengthSlider.value);
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  let password = '';
  for (let i = 0; i < length; i++) password += charset[array[i] % charset.length];

  currentPassword = password;
  passwordDisplay.textContent = password;
  passwordDisplay.classList.add('generated');
  updateStrength(password);
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
  try {
    await navigator.clipboard.writeText(currentPassword);
    showCopyNotification();
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = currentPassword;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showCopyNotification();
  }
}

function showCopyNotification() {
  copyNotification.classList.add('show');
  setTimeout(() => { copyNotification.classList.remove('show'); }, 1600);
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);
window.addEventListener('load', generatePassword);

[uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck, lengthSlider].forEach(el => {
  el.addEventListener('change', generatePassword);
});
