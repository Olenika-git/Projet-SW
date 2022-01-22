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
let tableauSortieFilms = [];
let tableauDirecteurFilms = [];
let tableauProducteurFilms = [];

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
let case0 = document.querySelector('#case0');
let case1 = document.querySelector('#case1');
let case2 = document.querySelector('#case2');
let case3 = document.querySelector('#case3');
let case4 = document.querySelector('#case4');
let case5 = document.querySelector('#case5');
let case6 = document.querySelector('#case6');
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
film.addEventListener('click', function () {
  jsdiv = document.querySelector('#infoJs');
  console.log("Films");
  jsdiv.innerHTML = "<div id='js'>" + tableauTitreFilms[0] +
    "<p>Sortie : " + tableauSortieFilms[0] + " </p><p>Producteur : " + tableauProducteurFilms[0] + "</p><p>Directeur : " + tableauDirecteurFilms[0] + "</p></div>";
  case0.style.backgroundImage = "url('/resource/img/film/film1.jpg')";
  case1.style.backgroundImage = "url('/resource/img/film/film2.jpg')";
  case2.style.backgroundImage = "url('/resource/img/film/film3.jpg')";
  case3.style.backgroundImage = "url('/resource/img/film/film4.jpg')";
  case4.style.backgroundImage = "url('/resource/img/film/film5.jpg')";
  case5.style.backgroundImage = "url('/resource/img/film/film6.jpg')";
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
      tableauSortieFilms[i] = responseFilms.results[i].release_date;
      tableauProducteurFilms[i] = responseFilms.results[i].producer;
      tableauDirecteurFilms[i] = responseFilms.results[i].director;
    }
    console.log(responseFilms);
    console.log("Tableau : " + tableauTitreFilms);
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