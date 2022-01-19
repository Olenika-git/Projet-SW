// Script du Carousel

var carousel = document.querySelector('.carousel');
var cellule = carousel.querySelectorAll('.case_carousel');
var nbCellule;
var indexChoisit = 0;
var cellLargeur = carousel.offsetWidth;
var rotateFn = 'rotateY';
var radius, degres;

// Rotation de notre Carousel
function rotationCarousel() {
  var angle = degres * indexChoisit * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

// Récup des evénements sur les boutons
var prevButton = document.querySelector('.precedent');
prevButton.addEventListener( 'click', function() {
  indexChoisit--;
  rotationCarousel();
});

var nextButton = document.querySelector('.suivant');
nextButton.addEventListener( 'click', function() {
  indexChoisit++;
  rotationCarousel();
});

// TestAkinelo
var testAki = document.querySelector('#case1');
testAki.addEventListener( 'click', function() {
  console.log("ta cliquer MaGle");
});

// Changement du nb de cases du Carousel
function changeCarousel() {
  nbCellule = 9;
  degres = 360 / nbCellule;
  var tailleCellule = cellLargeur;
  radius = Math.round( ( tailleCellule / 2) / Math.tan( Math.PI / nbCellule ) );
  rotationCarousel();
}
// Permet l'initialisation du carousel
changeCarousel();

// Requêtes API
$.ajax({
  url: "https://swapi.dev/api/films/",
  method: "GET",
  success: function(response){
    console.log(response);
  },
});

// Google Scrap