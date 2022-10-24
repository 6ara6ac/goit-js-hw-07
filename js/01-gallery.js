import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const galleryMarkup = onCreateGalleryItem(galleryItems);


galleryContainer.addEventListener ('click', onGalleryItemClick)
galleryContainer.insertAdjacentHTML ('beforeend', galleryMarkup);

function onCreateGalleryItem (galleryItems) {
    return galleryItems
        .map (({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}


function onGalleryItemClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const itemUrl = evt.target.dataset.source;
    const itemDesc = evt.target.alt;


    const showOriginImage = basicLightbox.create(
    `<img src="${itemUrl}" alt="${itemDesc}">`,
);

const onEscButton = (evt) => {
    if (evt.code === "Escape") {
        showOriginImage.close()
        window.removeEventListener("keydown", onEscButton)
    }
    return;
}

window.addEventListener ("keydown", onEscButton);

showOriginImage.show()
}









