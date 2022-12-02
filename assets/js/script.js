let searchBtn = document.querySelector('.header-search__btn-icon');
let btnSearchBlock = document.querySelector('.header-search__btn');

searchBtn.addEventListener('click', () => {
  btnSearchBlock.classList.toggle('active')
});

let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.header-nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
})