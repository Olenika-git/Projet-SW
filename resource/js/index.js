// Script du Carousel

// variable globale carousel
let carousel = document.querySelector('.carousel');
let indexChoisit = 0;
let cellLargeur = carousel.offsetWidth;
let rotateFn = 'rotateY';
let radius, degres;

// variable globale characters
let nom, height, weight, gender;

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
  jsdiv.innerHTML = "<div id='js'>" + nom +
    "<p>Taille : " + height + " </p><p>Poids : " + weight + "</p><p>Sexe : " + gender + "</p></div>";

  for (let i = 1; i < 9; i++) {
    jsdiv = document.querySelector('#infoJs' + i);
    jsdiv.innerHTML = "<div id='js'>" + nom + "i" +
      "<p>Taille : " + height + " </p><p>Poids : " + weight + "</p><p>Sexe : " + gender + "</p></div>";

  }
});

// Recup Bouton Film
let film = document.querySelector('#film');
film.addEventListener('click', function () {
  console.log("Films");
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
    let tableauPerso = [];
    // On stocke nos personnages dans le Tableau
    for (let i = 0; i < 9; i++) {
      tableauPerso[i] = responsePerso.results[i].name;

    }
    console.log(responsePerso);
    nom = responsePerso.results[0].name;
    height = responsePerso.results[0].height;
    weight = responsePerso.results[0].mass;
    gender = responsePerso.results[0].gender;
  },
});

//Récup des Films
// $.ajax({
//   url: "https://swapi.dev/api/films/",
//   method: "GET",
//   success: function(responseFilms){
//     // Ont crée une variable tableauPerso pour stocker nos personnages dans un Tableau
//   let tableauFilms = [];
//     //On stocke nos personnages dans le Tableau
//     for (let i = 0; i < 9; i++){
//       tableauFilms[i] = responseFilms.results[i].title;
//     }
//     console.log(responseFilms);
//   },
// });

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