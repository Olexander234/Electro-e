let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



$(document).ready(function() {
  $("#owl-example").owlCarousel({
    items :3,
    navigation: true,
    navigationText:  [
    "<i class='icon-chevron-left icon-white'><</i>",
    "<i class='icon-chevron-right icon-white'>></i>"
    ],
    pagination: true,
    responsive :true,
   autoPlay: true,
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}


