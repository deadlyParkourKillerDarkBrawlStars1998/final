
var feedback = document.querySelector('.modal-feedback');
var callClose = document.querySelector('.modal-call__close-btn');
var cover = document.querySelector('.modal-cover');
var sidemenuCall = document.querySelector('.side-menu__call');
var modalCall = document.querySelector('.modal-call');
var modal = document.querySelector('.side-menu');
var modalWrapper = document.querySelector('.side-menu-wrapper');

var body = document.querySelector('.body');

sidemenuCall.addEventListener('click', function () {
  modalCall.classList.add('modal-call--modal-open');
  cover.classList.add('modal-cover--modal-open');
  modal.classList.remove('side-menu--open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  body.classList.add('body--modal-open');
});

cover.addEventListener('click', function () {
  modalCall.classList.remove('modal-call--modal-open');
  body.classList.remove('body--modal-open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
});

callClose.addEventListener('click', function () {
  modalCall.classList.remove('modal-call--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  body.classList.remove('body--modal-open');
  bodyScroll.enable();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalCall.classList.remove('modal-call--modal-open');
    modalWrapper.classList.remove('side-menu-wrapper--modal-open');
    body.classList.remove('body--modal-open');
  }
});
