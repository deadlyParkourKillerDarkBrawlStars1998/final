
var burger = document.querySelector('.upper-header__burger');
var feedbackBtn = document.querySelector('.upper-header__chat');
var callBtn = document.querySelector('.upper-header__call');
var closeBtn = document.querySelector('.side-menu__close-btn');
var modal = document.querySelector('.side-menu');
var modalWrapper = document.querySelector('.side-menu-wrapper');
var modalFeedback = document.querySelector('.modal-feedback');
var modalCall = document.querySelector('.modal-call');

var body = document.querySelector('.body');

var app = document.querySelector('.app');

var cover = document.querySelector('.modal-cover');

feedbackBtn.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback--modal-open');
  cover.classList.add('modal-cover--modal-open');
  body.classList.add('body--modal-open');
});

callBtn.addEventListener('click', function () {
  modalCall.classList.add('modal-call--modal-open');
  cover.classList.add('modal-cover--modal-open');
  body.classList.add('body--modal-open');
});

burger.addEventListener('click', function () {
  modal.classList.add('side-menu--open');
  cover.classList.add('modal-cover--modal-open');
  modalWrapper.classList.add('side-menu-wrapper--modal-open');
  body.classList.add('body--modal-open');
});

cover.addEventListener('click', function () {
  modal.classList.remove('side-menu--open');
  modalFeedback.classList.remove('modal-feedback--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('side-menu--open');
  cover.classList.remove('modal-cover--modal-open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  bodyScroll.enable();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('side-menu--open');
    cover.classList.remove('modal-cover--modal-open');
    modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  }
});
