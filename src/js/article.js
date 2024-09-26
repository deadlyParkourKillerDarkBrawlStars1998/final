var expandArticle = document.querySelector('.article__read-more');
var articleButtonText = document.querySelector('.article__text-button');
var text3 = document.querySelector('.article__text-3');
var text3Wrapper = document.querySelector('.article__text-3-wrapper');
var text2 = document.querySelector('.article__text-2');
var text2Wrapper = document.querySelector('.article__text-2-wrapper');

var expandImg = document.querySelector('.article__expand-img');

expandArticle.addEventListener('click', function () {

  text3.classList.add('article__text-3--expanded');
});

expandArticle.addEventListener('click', function () {
  if (!text3Wrapper.classList.contains('article__text-3-wrapper--expanded')) {
    text3Wrapper.style.maxHeight = text3.scrollHeight + 'px';
    text3Wrapper.classList.add('article__text-3-wrapper--expanded');
    text2Wrapper.style.maxHeight = text2.scrollHeight + 'px';
    text2Wrapper.classList.add('article__text-2-wrapper--expanded');
    expandImg.classList.add('article__expand-img--expanded');
    expandArticle.classList.add('article__read-more--expanded');
    articleButtonText.textContent = 'Скрыть';
  } else {
    text3Wrapper.style.maxHeight = '1px';
    text3Wrapper.classList.remove('article__text-3-wrapper--expanded');
    text2Wrapper.style.maxHeight = '1px';
    text2Wrapper.classList.remove('article__text-2-wrapper--expanded');
    expandImg.classList.remove('article__expand-img--expanded');
    expandArticle.classList.remove('article__read-more--expanded');
    articleButtonText.textContent = 'Показать всё';
  }
});
