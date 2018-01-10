var button  = document.querySelector('.container');
var lightbox = document.querySelector('.lightbox');
var close = document.querySelector('.close');

button.addEventListener('click', getClick, false);

function openLightbox() {
  lightbox.classList.remove("hidden");

}

function closeLightbox() {
  lightbox.classList.add("hidden");

}

function getClick(e) {
  if (e.target !== e.currentTarget){
    var buttonClick = e.target.id;
    console.log(buttonClick);
  }
}

button.addEventListener('click', openLightbox, false);
close.addEventListener('click', closeLightbox, false);
