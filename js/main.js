var button  = document.querySelector('.container');
var close = document.querySelectorAll('.close');



function getClick(e) {
  if (e.target !== e.currentTarget){
    var buttonClick = e.target.id;
    // console.log(buttonClick);
    if (buttonClick === 'hideHUD') {
      hideHUD();
    }else {

    // console.log(buttonClick);
    var selector = ".lightbox" + buttonClick ;
    // console.log(selector);
    var lightbox = document.querySelector(selector);
    // console.log(selector);
    lightbox.classList.toggle('hidden');
    lightbox.classList.replace('animateOut', 'animateIn');
    button.style.pointerEvents = "none";
    controls.enabled = false;
  }
}
}

document.addEventListener('click', function (event){
    if ( event.target.classList.contains('close')){
        event.target.parentElement.parentElement.classList.replace('animateIn', 'animateOut');
        button.style.pointerEvents = "all";
        controls.enabled = true;
        setTimeout(function(){
          event.target.parentElement.parentElement.classList.add('hidden');
        }, 500);
    }
}, false);

function hideHUD(){
  button.classList.toggle('hidden');
}
button.addEventListener('click', getClick, false);
