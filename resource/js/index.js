// Script du Carousel

// variable globale carousel
let carousel = document.querySelector('.carousel');
let indexChoisit = 0;
let cellLargeur = carousel.offsetWidth;
let rotateFn = 'rotateY';
let radius, degres;

// variable globale characters
let tableauNomPerso = [];
let tableauTaillePerso = [];
let tableauPoidsPerso = [];
let tableauSexePerso = [];

// variable globale films
let tableauTitreFilms = [];

// Rotation de notre Carousel
function rotationCarousel() {
  let angle = degres * indexChoisit * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
    rotateFn + '(' + angle + 'deg)';
}

// Récup des evénements sur les boutons du carousel

// Precedent
let prevButton = document.querySelector('.precedent');
prevButton.addEventListener('click', function () {
  indexChoisit--;
  rotationCarousel();
});

// Suivant
let nextButton = document.querySelector('.suivant');
nextButton.addEventListener('click', function () {
  indexChoisit++;
  rotationCarousel();
});

// Récup des événements dans le MENU principal

// Récup Bouton Personnage
let personnage = document.querySelector('#acc');
let jsdiv = document.querySelector('#infoJs');
personnage.addEventListener('click', function () {
  jsdiv.innerHTML = "<div id='js'>" + tableauNomPerso[0] +
    "<p>Taille : " + tableauTaillePerso[0] + "cm" + " </p><p>Poids : " + tableauPoidsPerso[0] + "kg" + "</p><p>Sexe : " + tableauSexePerso[0] + "</p></div>";

  for (let i = 1; i < 9; i++) {
    jsdiv = document.querySelector('#infoJs' + i);
    jsdiv.innerHTML = "<div id='js'>" + tableauNomPerso[i] +
      "<p>Taille : " + tableauTaillePerso[i] + "cm" + " </p><p>Poids : " + tableauPoidsPerso[i] + "kg" + "</p><p>Sexe : " + tableauSexePerso[i] + "</p></div>";

  }
});

// Recup Bouton Film
let film = document.querySelector('#film');
let test = document.querySelector('#case1');
film.addEventListener('click', function () {
  console.log("Films");
  test.style.backgroundImage = "url('img_tree.png')";
});

// Recup Bouton Vaisseau
let vaisseau = document.querySelector('#vaisseau');
vaisseau.addEventListener('click', function () {
  console.log("Vaisseau");
});

// Recup Bouton Credits
let credits = document.querySelector('#cred');
credits.addEventListener('click', function () {
  console.log("Credits");
});

// TestAkinelo
let testAki = document.querySelector('#case1');
testAki.addEventListener('click', function () {
  console.log("ta cliquer MaGle");
});

// Rotation et Changement Carousel
function changeCarousel() {
  let nbCellule = 9;
  degres = 360 / nbCellule;
  let tailleCellule = cellLargeur;
  radius = Math.round((tailleCellule / 2) / Math.tan(Math.PI / nbCellule));
  rotationCarousel();
}
// Permet l'initialisation du carousel
changeCarousel();


// Requêtes API en Jquery
// 3 Requêtes sont stocké dans un tableau au chargement de la page, cela évite de rapeller l'api tout les deux clic

// Récup des Personnages
$.ajax({
  url: "https://swapi.dev/api/people/",
  method: "GET",
  success: function (responsePerso) {
    // Ont crée une variable tableauPerso pour stocker nos personnages dans un Tableau
    // On stocke nos personnages dans le Tableau
    for (let i = 0; i < 9; i++) {
      tableauNomPerso[i] = responsePerso.results[i].name;
      tableauTaillePerso[i] = responsePerso.results[i].height;
      tableauPoidsPerso[i] = responsePerso.results[i].mass;
      tableauSexePerso[i] = responsePerso.results[i].gender;
    }
  },
});

// Récup des Films
$.ajax({
  url: "https://swapi.dev/api/films/",
  method: "GET",
  success: function (responseFilms) {
    // Ont crée une variable tableauPerso pour stocker nos personnages dans un Tableau
    //On stocke nos personnages dans le Tableau
    for (let i = 0; i < 6; i++) {
      tableauTitreFilms[i] = responseFilms.results[i].title;
    }
    console.log(responseFilms);
    console.log(responseFilms.results[0].title);
  },
});

// Récup des Vaisseau
$.ajax({
  url: "https://swapi.dev/api/starships/",
  method: "GET",
  success: function (responseVaisseau) {
    // Ont crée une variable tableauPerso pour stocker nos personnages dans un Tableau
    let tableauVaisseau = [];
    //On stocke nos personnages dans le Tableau
    for (let i = 0; i < 9; i++) {
      tableauVaisseau[i] = responseVaisseau.results[i].name;
    }
  },
});

  // Pour les images document.querySelector('#case'+i).innerHTML = response.results[i].name;