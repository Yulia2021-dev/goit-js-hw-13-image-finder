const refs = {
  searchForm: document.querySelector('.js-search-form'),
  imageGallery: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  loadMoreBtnSpinner: document.querySelector('button[data-action="load-more"]>.spinner'),
  loadMoreBtnLabel: document.querySelector('button[data-action="load-more"]>.label'),
  images: document.querySelectorAll('img'),
};

export default refs;
