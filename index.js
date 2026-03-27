import{S as f}from"./assets/vendor-CgTBfC_f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),d=images.map(({preview:a,original:s,description:o})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${o}"
          />
        </a>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",d);new f(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".feedback-form"),n="feedback-form-state",t={email:"",message:""},m=localStorage.getItem(n);if(m){const a=JSON.parse(m);t.email=a.email||"",t.message=a.message||"",l.elements.email.value=t.email,l.elements.message.value=t.message}l.addEventListener("input",a=>{const{name:s,value:o}=a.target;s in t&&(t[s]=o),localStorage.setItem(n,JSON.stringify(t))});l.addEventListener("submit",a=>{if(a.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(n),l.reset(),t.email="",t.message=""});
//# sourceMappingURL=index.js.map
