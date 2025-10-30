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

// Update length display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Secure random integer via rejection sampling
function secureRandomInt(max) {
    const array = new Uint32Array(1);
    const range = Math.floor(4294967296 / max) * max;
    let rand;
    do {
        window.crypto.getRandomValues(array);
        rand = array[0];
    } while (rand >= range);
    return rand % max;
}

// Generate password
function generatePassword() {
    let charset = '';
    const categories = [];
    if (uppercaseCheck.checked) { charset += uppercase; categories.push(uppercase); }
    if (lowercaseCheck.checked) { charset += lowercase; categories.push(lowercase); }
    if (numbersCheck.checked) { charset += numbers; categories.push(numbers); }
    if (symbolsCheck.checked) { charset += symbols; categories.push(symbols); }

    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }
    const length = parseInt(lengthSlider.value);
    let passwordArray = [];

    // Ensure at least one of each selected category
    categories.forEach(cat => {
        passwordArray.push(cat.charAt(secureRandomInt(cat.length)));
    });

    for (let i = passwordArray.length; i < length; i++) {
        passwordArray.push(charset.charAt(secureRandomInt(charset.length)));
    }

    // Shuffle using Fisher-Yates
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }

    const password = passwordArray.join('');
    currentPassword = password;
    passwordDisplay.textContent = password;
    passwordDisplay.classList.add('generated');
    updateStrength(password);
}

// Update strength meter
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
    if (strength <= 3) {
        strengthFill.classList.add('weak');
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#f56565';
    } else if (strength <= 5) {
        strengthFill.classList.add('medium');
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#ed8936';
    } else {
        strengthFill.classList.add('strong');
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#48bb78';
    }
}

// Copy to clipboard
async function copyToClipboard() {
    if (!currentPassword) {
        alert('Generate a password first!');
        return;
    }
    try {
        await navigator.clipboard.writeText(currentPassword);
        showCopyNotification();
    } catch (err) {
        // Fallback for older browsers
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
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 2000);
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);
window.addEventListener('load', generatePassword);
uppercaseCheck.addEventListener('change', generatePassword);
lowercaseCheck.addEventListener('change', generatePassword);
numbersCheck.addEventListener('change', generatePassword);
symbolsCheck.addEventListener('change', generatePassword);
lengthSlider.addEventListener('change', generatePassword);
