import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const randerList = (items) =>
  items
    .map(
      ({ preview, original, description }) =>
        `<li>
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </li>`
    )
    .join("");

console.log(randerList(galleryItems));

const galleryItemsCreate = (el) => {
  const galleryEl = document.querySelector(".gallery");
  galleryEl.insertAdjacentHTML("beforeend", el);
};

galleryItemsCreate(randerList(galleryItems));

const openGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
