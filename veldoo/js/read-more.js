const readMore = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more--content')
const btnOpen = document.querySelector('.btn--read-more--open');
const btnClose = document.querySelector('.btn--read-more--close');

function open () {
  readMore.style.display = 'flex';
};
function close () {
  readMore.style.display = 'none';
};

btnOpen.onclick = open;
btnClose.onclick = close;
window.onclick = function (event) {
  if (event.target == readMore){
    close();
  }};
