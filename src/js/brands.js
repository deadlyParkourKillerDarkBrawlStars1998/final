var swiperElement = document.querySelector('.swiper');
var swiperWrapper = document.querySelector('.brands__swiper-wrapper');
var moreLessButton = document.querySelector('.brands__expand-brands');
var buttonText = document.querySelector('.expand-brands__text');
var expandImage = document.querySelector('.expand-brands__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('expand-brands__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('brands__expand-brands--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('expand-brands__expand-img--upside');
    swiperElement.style.maxHeight = '192px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('brands__expand-brands--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

const breakpoint = window.matchMedia('(max-width: 767.98px)');

if (breakpoint.matches) {
  swiperWrapper.classList.add('brands__swiper-wrapper--initialized');
}
