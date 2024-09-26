var feedback = document.querySelector('.modal-feedback');
var feedbackClose = document.querySelector('.modal-feedback__close-btn');
var cover = document.querySelector('.modal-cover');
var sidemenuChat = document.querySelector('.side-menu__chat');
var modal = document.querySelector('.side-menu');
var modalWrapper = document.querySelector('.side-menu-wrapper');
var body = document.querySelector('.body');

sidemenuChat.addEventListener('click', function () {
  feedback.classList.add('modal-feedback--modal-open');
  cover.classList.add('modal-cover--modal-open');
  modal.classList.remove('side-menu--open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  body.classList.add('body--modal-open');
});

cover.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
});

feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  bodyScroll.enable();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    feedback.classList.remove('modal-feedback--modal-open');
    cover.classList.remove('modal-cover--modal-open');
    modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  }
});
