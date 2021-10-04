import './sass/main.scss';
import ApiService from './js/apiServise';
import refs from './js/refs';
import photoCard from './template/photo-card.hbs';
import ButtonService from './js/button';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

const { searchForm, imageGallery, loadMoreBtn, loadMoreBtnSpinner, loadMoreBtnLabel, images } =
  refs;

const imageApi = new ApiService();

const button = new ButtonService({
  loadMoreBtn: loadMoreBtn,
  loadMoreLabel: loadMoreBtnLabel,
  loadMoreSpinner: loadMoreBtnSpinner,
  classList: 'd-none',
});

console.log(images);
// Delete all images in gallery
function clearGallery() {
  imageGallery.innerHTML = '';
}

const onLoadMoreBtn = event => {
  //const button = event.target;
  button.disable();

  imageApi.fetchImg().then(data => {
    imageGallery.insertAdjacentHTML('beforeend', photoCard(data));
    const imgList = imageGallery.querySelectorAll('img');

    for (let i = 0; i < imgList.length; i++) {
      imgList[i].onclick = () => appendLightBox(data, i);
    }

    button.show();
    button.enable();

    const { height: cardHeight } = imageGallery.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  });
};

function appendLightBox(data, i) {
  const instance = basicLightbox.create(`
    <img src="${data[i].webformatURL}" width="800" height="600">
`);
  //   const instance = basicLightbox.create(`
  //       <img src="${data[i].webformatURL}" width="400" height="300">
  //   `);

  instance.show();
}

const onSubmitSearchForm = event => {
  event.preventDefault();
  clearGallery();
  imageApi.resetPage();

  const userRequest = event.currentTarget.elements.query.value;
  imageApi.query = userRequest;
  onLoadMoreBtn();

  searchForm.reset();
};

searchForm.addEventListener('submit', onSubmitSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);
