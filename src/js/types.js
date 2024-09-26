var swiperElement = document.querySelector('.types__swiper');
var swiperWrapper = document.querySelector('.types__swiper-wrapper');
var moreLessButton = document.querySelector('.types__expand-types');
var buttonText = document.querySelector('.expand-types__text');
var expandImage = document.querySelector('.expand-types__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('expand-types__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('types__expand-types--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('expand-types__expand-img--upside');
    swiperElement.style.maxHeight = '192px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('types__expand-types--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

const breakpoint = window.matchMedia('(max-width: 767.98px)');

if (breakpoint.matches) {
  swiperElement.classList.add('types__swiper--initialized');
  swiperWrapper.classList.add('types__swiper-wrapper--initialized');
  moreLessButton.classList.add('expand-types--disabled');
}
