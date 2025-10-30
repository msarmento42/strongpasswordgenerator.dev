let WORDS=[];let SEP=' ';
const statusEl=document.getElementById('ppStatus');
const display=document.getElementById('ppDisplay');
const genBtn=document.getElementById('ppGenerate');
const copyBtn=document.getElementById('ppCopy');
const copied=document.getElementById('ppCopied');
const slider=document.getElementById('wordCount');
const wcVal=document.getElementById('wordCountValue');
const entropyEl=document.getElementById('ppEntropy');
const strengthFill=document.getElementById('ppStrength');
function setStatus(t){if(statusEl) statusEl.textContent=t;}
async function loadWords(){try{setStatus('Loading word list…');const res=await fetch('/wordlist.json',{cache:'force-cache'});if(!res.ok) throw new Error('fetch failed '+res.status);const arr=await res.json();WORDS=Array.isArray(arr)?arr:[];setStatus(`Loaded ${WORDS.length.toLocaleString()} words.`);}catch(e){setStatus('Word list not found yet — it will appear automatically after the next GitHub Action run. Try again soon.');WORDS=[];}}
function entropyBits(words,choices){return (Math.log2(choices)||0)*words;}
function updateEntropy(words){const bits=entropyBits(words,Math.max(WORDS.length,1));entropyEl.textContent=Number(bits.toFixed(1))+' bits';strengthFill.className='strength-fill';if(bits<50) strengthFill.classList.add('weak');else if(bits<80) strengthFill.classList.add('medium');else strengthFill.classList.add('strong');}
function choice(max){const arr=new Uint32Array(1);crypto.getRandomValues(arr);return arr[0]%max;}
function generate(){const n=parseInt(slider.value,10);if(!WORDS.length){setStatus('Word list not loaded.');return;}const picked=[];for(let i=0;i<n;i++){picked.push(WORDS[choice(WORDS.length)]);}const out=picked.join(SEP);display.textContent=out;display.classList.add('generated');updateEntropy(n);}
function copy(){const text=display.textContent||'';if(!text) return;navigator.clipboard.writeText(text).catch(()=>{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();});copied.classList.add('show');setTimeout(()=>copied.classList.remove('show'),2000);}
wcVal.textContent=slider.value;
slider.addEventListener('input',()=>{wcVal.textContent=slider.value;updateEntropy(parseInt(slider.value,10));});
document.querySelectorAll('button[data-sep]').forEach(btn=>btn.addEventListener('click',()=>{SEP=btn.getAttribute('data-sep');generate();}));
genBtn.addEventListener('click',generate);
copyBtn.addEventListener('click',copy);
window.addEventListener('load',async()=>{await loadWords();updateEntropy(parseInt(slider.value,10));});