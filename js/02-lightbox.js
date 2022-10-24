import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const galleryMarkup = onCreateGalleryItem(galleryItems);


galleryContainer.addEventListener ('click', onClickImg)
galleryContainer.insertAdjacentHTML ('beforeend', galleryMarkup);


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});


function onCreateGalleryItem (galleryItems) {
    return galleryItems
        .map (({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    })
    .join('');
}


function onClickImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

}








