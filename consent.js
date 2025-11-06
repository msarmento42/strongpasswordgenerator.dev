/* consent.js — lightweight Consent Mode v2 banner (non-TCF).
   For EEA/UK you’ll ultimately want a TCF v2 CMP. */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent','default',{
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    analytics_storage:'denied'
  });

  const COOKIE='spg_consent', DAYS=180;
  function setCookie(n,v,d){const t=new Date();t.setTime(t.getTime()+d*864e5);
    document.cookie=`${n}=${v}; expires=${t.toUTCString()}; path=/; SameSite=Lax`;
  }
  function getCookie(n){return document.cookie.split(';').map(v=>v.trim()).find(v=>v.startsWith(n+'='))?.split('=')[1];}
  const saved=getCookie(COOKIE);
  if(saved==='granted'){ gtag('consent','update',{
      ad_storage:'granted', ad_user_data:'granted', ad_personalization:'granted', analytics_storage:'granted'
    }); return; }
  if(saved==='denied'){ return; }

  const bar=document.createElement('div'); bar.setAttribute('role','dialog'); bar.setAttribute('aria-live','polite');
  bar.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1a202c;color:#fff;padding:14px 16px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;box-shadow:0 -6px 24px rgba(0,0,0,.35);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,sans-serif';
  const msg=document.createElement('div'); msg.style.flex='1'; msg.style.minWidth='250px'; msg.style.lineHeight='1.45';
  msg.innerHTML='We use cookies to help show relevant ads and measure performance. See our <a href="/privacy.html" style="color:#81e6d9">Privacy Policy</a>.';
  const btns=document.createElement('div'); btns.style.display='flex'; btns.style.gap='10px';
  function B(){const b=document.createElement('button'); b.style.cssText='cursor:pointer;border:none;border-radius:8px;padding:10px 14px;font-weight:600'; return b;}
  const accept=B(); accept.textContent='Accept'; accept.style.background='#48bb78'; accept.style.color='#fff';
  const reject=B(); reject.textContent='Reject'; reject.style.background='#e53e3e'; reject.style.color='#fff';
  accept.onclick=function(){ gtag('consent','update',{
      ad_storage:'granted', ad_user_data:'granted', ad_personalization:'granted', analytics_storage:'granted'
    }); setCookie(COOKIE,'granted',DAYS); bar.remove(); };
  reject.onclick=function(){ gtag('consent','update',{
      ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied'
    }); setCookie(COOKIE,'denied',DAYS); bar.remove(); };
  btns.append(accept,reject); bar.append(msg,btns); document.body.appendChild(bar);
})();
