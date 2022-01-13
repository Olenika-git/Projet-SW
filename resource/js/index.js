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

//Récup des evénements sur les boutons
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

//Récup des événements sur le slider nbCellule
var cellsRange = document.querySelector('.nb-Cellule');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );


// Changement du nb de cases du Carousel
function changeCarousel() {
  nbCellule = cellsRange.value;
  degres = 360 / nbCellule;
  //  tailleCellule est Horizontale ? si oui prend CellLargeur | si non prend CellHauteur
  var tailleCellule = isHorizontal ? cellLargeur : cellHauteur;
  radius = Math.round( ( tailleCellule / 2) / Math.tan( Math.PI / nbCellule ) );
  for ( var i=0; i < cellule.length; i++ ) {
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

//Orientation du Carousel
var orientationRadio = document.querySelectorAll('input[name="orientation"]');
( function() {
  for ( var i = 0; i < orientationRadio.length; i++) {
    var radio = orientationRadio[i];
    radio.addEventListener( 'change', onOrientationChange );
  }
})();

// Au Changement d'orientation du Carousel
function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

// Lancement Initial (Si non utilisé : Suivant et Precedent deviennent unitilisable sans avoir fait une rotation du carousel)
onOrientationChange();

//Google Scrap

google.load('search', '1');
google.setOnLoadCallback(OnLoad);
var search;

    var keyword = 'mountains';

    function OnLoad()
    {
        search = new google.search.ImageSearch();

        search.setSearchCompleteCallback(this, searchComplete, null);

        search.execute(keyword);
    }

    function searchComplete()
    {
        if (search.results && search.results.length > 0)
        {
            var rnd = Math.floor(Math.random() * search.results.length);

            //Jquery temp $('body').css('background-image', "url('" + search.results[rnd]['url'] + "')");
            document.body.style.backgroundImage = "url('" + search.results[rnd]['url'] + "')";
        }
    }