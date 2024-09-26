var swiperElement = document.querySelector('.prices__swiper');
var swiperWrapper = document.querySelector('.prices__swiper-wrapper');
var pricesSlide = document.querySelectorAll('.prices-swiper-slide');
var pricesInfoSlide = document.querySelector(
  '.prices-swiper-slide__info-slide'
);
var pricesPriceInfo = document.querySelectorAll('.prices-swiper-slide__price');
var pricesTimeInfo = document.querySelectorAll('.prices-swiper-slide__time');
var pricesOrderBtn = document.querySelectorAll('.prices-swiper-slide__order');
var pricesServiceText = document.querySelectorAll(
  '.prices-swiper-slide__service'
);
var pricesSpacer = document.querySelector('.prices-swiper-slide__spacer');
var pricesText = document.querySelectorAll('.prices-swiper-slide__text');
var pricesInfo = document.querySelectorAll('.prices-swiper-slide__info');
var moreLessButton = document.querySelector('.prices__expand-prices');
var buttonText = document.querySelector('.expand-prices__text');
var expandImage = document.querySelector('.expand-prices__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('expand-prices__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('prices__expand-prices--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('expand-prices__expand-img--upside');
    swiperElement.style.maxHeight = '232px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('prices__expand-prices--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

const breakpoint = window.matchMedia('(max-width: 767.98px)');

if (breakpoint.matches) {
  swiperElement.classList.add('prices__swiper--initialized');
  moreLessButton.classList.add('expand-prices--disabled');
} else {
  swiperWrapper.classList.add('prices__swiper-wrapper--swiper-off');
  swiperElement.classList.add('prices__swiper--swiper-off');
  for (var i = 0; i < pricesSlide.length; i++) {
    pricesSlide[i].classList.add('prices-swiper-slide--swiper-off');
  }
  for (var i = 0; i < pricesOrderBtn.length; i++) {
    pricesOrderBtn[i].classList.add('prices-swiper-slide__order--swiper-off');
  }
  for (var i = 0; i < pricesInfo.length; i++) {
    pricesInfo[i].classList.add('prices-swiper-slide__info--swiper-off');
  }
  for (var i = 0; i < pricesServiceText.length; i++) {
    pricesServiceText[i].classList.add(
      'prices-swiper-slide__service--swiper-off'
    );
  }
  for (var i = 0; i < pricesText.length; i++) {
    pricesText[i].classList.add('prices-swiper-slide__text--swiper-off');
  }
  for (var i = 0; i < pricesPriceInfo.length; i++) {
    pricesPriceInfo[i].classList.add('prices-swiper-slide__price--swiper-off');
  }
  for (var i = 0; i < pricesTimeInfo.length; i++) {
    pricesTimeInfo[i].classList.add('prices-swiper-slide__time--swiper-off');
  }
  pricesInfoSlide.classList.add('prices-swiper-slide__info-slide--swiper-off');
  pricesSpacer.classList.add('prices-swiper-slide__spacer--swiper-off');
}
