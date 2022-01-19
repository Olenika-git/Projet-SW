// Script du Carousel

var carousel = document.querySelector('.carousel');
var cellule = carousel.querySelectorAll('.case_carousel');
var nbCellule;
var indexChoisit = 0;
var cellLargeur = carousel.offsetWidth;
var cellHauteur = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
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

// Récup des événements sur le slider nbCellule



// Changement du nb de cases du Carousel
function changeCarousel() {
  nbCellule = 9;
  degres = 360 / nbCellule;
  //  tailleCellule est Horizontale ? si oui prend CellLargeur | si non prend CellHauteur
  var tailleCellule = isHorizontal ? cellLargeur : cellHauteur;
  radius = Math.round( ( tailleCellule / 2) / Math.tan( Math.PI / nbCellule ) );

  for ( var i = 0; i < cellule.length; i++ ) {
    var cell = cellule[i];
    if ( i < nbCellule ) {
      // Cellule Affiché
      cell.style.opacity = 1;
      var cellAngle = degres * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // Cellule Caché
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }
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