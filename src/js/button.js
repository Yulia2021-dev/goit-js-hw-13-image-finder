export default class ButtonService {
  constructor({ loadMoreBtn, loadMoreLabel, loadMoreSpinner, classList }) {
    this.loadMoreBtn = loadMoreBtn;
    this.loadMoreLabel = loadMoreLabel;
    this.loadMoreSpinner = loadMoreSpinner;
    this.classList = classList;
  }

  enable() {
    this.loadMoreBtn.disabled = false;
    this.loadMoreLabel.textContent = 'Load more';
    this.loadMoreSpinner.classList.add('d-none');
  }

  disable() {
    this.loadMoreBtn.disabled = true;
    this.loadMoreLabel.textContent = 'Loading...';
    this.loadMoreSpinner.classList.remove('d-none');
  }

  show() {
    this.loadMoreBtn.classList.remove('d-none');
  }

  hide() {
    this.loadMoreBtn.classList.add('d-none');
  }

  getClassList() {
    return this.classList;
  }
}
