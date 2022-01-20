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

// Récup des evénements sur les boutons du carousel (precedent et suivant)
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

// Récup des événements dans le MENU principal
  //Recup Bouton Personnage
var personnage = document.querySelector('#acc');
personnage.addEventListener( 'click', function() {
  console.log("Personnage");
});
  //Recup Bouton Film
var film = document.querySelector('#film');
film.addEventListener( 'click', function() {
  console.log("Films");
});
  //Recup Bouton Vaisseau
var vaisseau = document.querySelector('#vaisseau');
vaisseau.addEventListener( 'click', function() {
  console.log("Vaisseau");
});
  //Recup Bouton Credits
var credits = document.querySelector('#cred');
credits.addEventListener( 'click', function() {
  console.log("Credits");
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