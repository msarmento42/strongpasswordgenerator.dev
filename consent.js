/* consent.js — lightweight Consent Mode v2 banner (non-TCF)
   NOTE: For serving ads in the EEA/UK, Google requires a TCF v2–certified CMP
   (e.g., Funding Choices). This file provides immediate Consent Mode signals.
   When you enable Funding Choices, REMOVE this file and its <script> include.
*/

(function () {
  // --- Minimal gtag() stub + default denied (Consent Mode v2) ---
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  // default: deny until user chooses
  gtag('consent','default',{
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    analytics_storage:'denied'
  });

  // Simple cookie helpers
  const COOKIE = 'spg_consent';
  const DAYS = 180;
  function setCookie(name,value,days){
    const d=new Date();
    d.setTime(d.getTime()+days*24*60*60*1000);
    document.cookie=`${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
  }
  function getCookie(name){
    return document.cookie.split(';').map(v=>v.trim()).find(v=>v.startsWith(name+'='))?.split('=')[1];
  }

  // If stored choice exists, apply and skip UI
  const saved = getCookie(COOKIE);
  if (saved === 'granted') {
    gtag('consent','update',{
      ad_storage:'granted',
      ad_user_data:'granted',
      ad_personalization:'granted',
      analytics_storage:'granted'
    });
    return;
  }
  if (saved === 'denied') {
    // already default denied; just return
    return;
  }

  // --- Banner UI ---
  const bar = document.createElement('div');
  bar.setAttribute('role','dialog');
  bar.setAttribute('aria-live','polite');
  bar.style.cssText = `
    position:fixed; left:0; right:0; bottom:0; z-index:9999;
    background:#1a202c; color:#fff; padding:14px 16px;
    display:flex; flex-wrap:wrap; gap:12px; align-items:center; box-shadow:0 -6px 24px rgba(0,0,0,.35);
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,Cantarell,sans-serif; 
  `;
  const msg = document.createElement('div');
  msg.style.flex = '1';
  msg.style.minWidth = '250px';
  msg.style.lineHeight = '1.45';
  msg.innerHTML = `We use cookies to help show relevant ads and measure performance. 
  You can accept or reject. You can change your choice anytime by clearing site data. 
  For details, see our <a href="/privacy.html" style="color:#81e6d9">Privacy Policy</a>.`;

  const btnWrap = document.createElement('div');
  btnWrap.style.display='flex';
  btnWrap.style.gap='10px';

  function baseBtn() {
    const b=document.createElement('button');
    b.style.cssText=`
      cursor:pointer; border:none; border-radius:8px; padding:10px 14px; font-weight:600;
    `;
    return b;
  }

  const accept=baseBtn();
  accept.textContent='Accept';
  accept.style.background='#48bb78'; accept.style.color='#fff';

  const reject=baseBtn();
  reject.textContent='Reject';
  reject.style.background='#e53e3e'; reject.style.color='#fff';

  accept.onclick=function(){
    gtag('consent','update',{
      ad_storage:'granted',
      ad_user_data:'granted',
      ad_personalization:'granted',
      analytics_storage:'granted'
    });
    setCookie(COOKIE,'granted',DAYS);
    bar.remove();
  };
  reject.onclick=function(){
    gtag('consent','update',{
      ad_storage:'denied',
      ad_user_data:'denied',
      ad_personalization:'denied',
      analytics_storage:'denied'
    });
    setCookie(COOKIE,'denied',DAYS);
    bar.remove();
  };

  btnWrap.append(accept,reject);
  bar.append(msg,btnWrap);
  document.body.appendChild(bar);
})();
