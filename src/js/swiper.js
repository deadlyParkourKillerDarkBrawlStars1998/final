var swiperElement = document.querySelector('.swiper');
var swiperWrapper = document.querySelector('.swiper-wrapper');
var moreLessButton = document.querySelector('.brands__expand-brands');
var buttonText = document.querySelector('.expand-brands__text');
var expandImage = document.querySelector('.expand-brands__expand-img');

window.addEventListener('DOMContentLoaded', () => {
  const initializeSwiper = () => {
    console.log('initializeSwiper WoRKS');
    const breakpoint = window.matchMedia('(max-width: 767.98px)');

    if (breakpoint.matches) {
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });

      swiperWrapper.classList.add('swiper-wrapper--initialized');
      console.log('SWIPER INITIALIZED');
      moreLessButton.classList.add('expand-brands--disabled');
    }
  };

  initializeSwiper();
});
