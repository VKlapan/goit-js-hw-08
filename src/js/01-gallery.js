import { galleryItems } from './gallery-items.js';
// Change code below this line

//const basicLightbox = require('simplelightbox');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems => {
  const itemLiMarkup = galleryItems
    .map(item => {
      return `
      <div>
        <a class="gallery__item" href="${item.original}">
            <img  class="gallery__image"
                src="${item.preview}"
                alt="${item.description}">
        </a>
      </div>
        `;
    })
    .join('');

  return itemLiMarkup;
};

galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox');
