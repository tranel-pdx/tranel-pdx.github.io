// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
const init = function(){
let items = document.querySelectorAll('section');
for (let i = 0; i < items.length; i++){
  items[i].style.background = randomColor({luminosity: 'light'});
}
cssScrollSnapPolyfill()
}
init();


//TEST//

let navWrapper = document.querySelector('.nav-wrapper'),
  navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('active')
})

//TEST//

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}











// End of Your Code . Don't delete that line below!!
});
