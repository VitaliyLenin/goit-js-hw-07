import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

const galleryEl = document.querySelector(".gallery");

function makeGallery(item) {
  const galleryItemsCreate = item
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
        />
    </a>
</div>`;
    })
    .join("");

  return galleryEl.insertAdjacentHTML("afterbegin", galleryItemsCreate);
}
