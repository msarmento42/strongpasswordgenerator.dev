const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%^&*()_+-=[]{}|;:,.<>?';
const passwordDisplay=document.getElementById('passwordDisplay');
const generateBtn=document.getElementById('generateBtn');
const copyBtn=document.getElementById('copyBtn');
const copyNotification=document.getElementById('copyNotification');
const lengthSlider=document.getElementById('length');
const lengthValue=document.getElementById('lengthValue');
const uppercaseCheck=document.getElementById('uppercase');
const lowercaseCheck=document.getElementById('lowercase');
const numbersCheck=document.getElementById('numbers');
const symbolsCheck=document.getElementById('symbols');
const strengthText=document.getElementById('strengthText');
const strengthFill=document.getElementById('strengthFill');
let currentPassword='';
lengthSlider&&lengthSlider.addEventListener('input',()=>{lengthValue.textContent=lengthSlider.value;});
function generatePassword(){let charset='';if(uppercaseCheck?.checked)charset+=uppercase;if(lowercaseCheck?.checked)charset+=lowercase;if(numbersCheck?.checked)charset+=numbers;if(symbolsCheck?.checked)charset+=symbols;if(!charset){alert('Please select at least one character type!');return;}const length=parseInt(lengthSlider.value,10);const array=new Uint32Array(length);(window.crypto||window.msCrypto).getRandomValues(array);let password='';for(let i=0;i<length;i++){password+=charset[array[i]%charset.length];}currentPassword=password;passwordDisplay&&(passwordDisplay.textContent=password,passwordDisplay.classList.add('generated'));updateStrength(password);}
function updateStrength(p){let s=0;if(p.length>=8)s++;if(p.length>=12)s++;if(p.length>=16)s++;if(/[a-z]/.test(p))s++;if(/[A-Z]/.test(p))s++;if(/[0-9]/.test(p))s++;if(/[^a-zA-Z0-9]/.test(p))s++;if(strengthFill){strengthFill.className='strength-fill';if(s<=3){strengthFill.classList.add('weak');strengthText.textContent='Weak';strengthText.style.color='#f56565';}else if(s<=5){strengthFill.classList.add('medium');strengthText.textContent='Medium';strengthText.style.color='#ed8936';}else{strengthFill.classList.add('strong');strengthText.textContent='Strong';strengthText.style.color='#48bb78';}}}
async function copyToClipboard(){if(!currentPassword){alert('Generate a password first!');return;}try{await navigator.clipboard.writeText(currentPassword);}catch{const t=document.createElement('textarea');t.value=currentPassword;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();}copyNotification&&(copyNotification.classList.add('show'),setTimeout(()=>copyNotification.classList.remove('show'),2000));}
generateBtn&&generateBtn.addEventListener('click',generatePassword);
copyBtn&&copyBtn.addEventListener('click',copyToClipboard);
window.addEventListener('load',()=>{generateBtn&&generatePassword();});
['change'].forEach(evt=>{uppercaseCheck?.addEventListener(evt,generatePassword);lowercaseCheck?.addEventListener(evt,generatePassword);numbersCheck?.addEventListener(evt,generatePassword);symbolsCheck?.addEventListener(evt,generatePassword);lengthSlider?.addEventListener(evt,generatePassword);});