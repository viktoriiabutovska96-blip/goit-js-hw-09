import{S as r}from"./vendor-CgTBfC_f.js";const t=document.querySelector(".gallery"),i=images.map(({preview:a,original:e,description:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${l}"
          />
        </a>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",i);new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery-q7tZUney.js.map
