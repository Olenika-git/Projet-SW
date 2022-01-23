// _________ __                  __      __                      
// /   _____//  |______ _______  /  \    /  \_____ _______  ______
// \_____  \\   __\__  \\_  __ \ \   \/\/   /\__  \\_  __ \/  ___/
// /        \|  |  / __ \|  | \/  \        /  / __ \|  | \/\___ \ 
// /_______  /|__| (____  /__|      \__/\  /  (____  /__|  /____  >
//        \/           \/               \/        \/           \/              

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

// variable globale vaisseau
let tableauNomVaisseau = [];
let tableauVitesseVaisseau = [];
let tableauPrixVaisseau = [];

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

// Récup Evenements Bouton Personnage
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
  jsdiv = document.querySelector('#infoJs');

  case0.style.backgroundImage = "url('/resource/img/personnage/anakin.webp')"; case0.style.border = "thick solid #000";
  case1.style.backgroundImage = "url('/resource/img/personnage/c3po.png')"; case1.style.border = "thick solid #000";
  case2.style.backgroundImage = "url('/resource/img/personnage/r2d2.jpg')"; case2.style.border = "thick solid #000";
  case3.style.backgroundImage = "url('/resource/img/personnage/darthVader.jpg')"; case3.style.border = "thick solid #000";
  case4.style.backgroundImage = "url('/resource/img/personnage/leia.webp')"; case4.style.border = "thick solid #000";
  case5.style.backgroundImage = "url('/resource/img/personnage/Owenlars.webp')"; case5.style.border = "thick solid #000";
  case6.style.backgroundImage = "url('/resource/img/personnage/beru.webp')"; case6.style.border = "thick solid #000";
  case7.style.backgroundImage = "url('/resource/img/personnage/r5d4.jpg')"; case7.style.border = "thick solid #000";
  case8.style.backgroundImage = "url('/resource/img/personnage/biggs.webp')"; case8.style.border = "thick solid #000";

  jsdiv.innerHTML = "<div id='js'>" + tableauNomPerso[0] +
    "<p>Taille : " + tableauTaillePerso[0] + "cm" + " </p><p>Poids : " + tableauPoidsPerso[0] + "kg" + "</p><p>Sexe : " + tableauSexePerso[0] + "</p></div>";

  for (let i = 1; i < 9; i++) {
    jsdiv = document.querySelector('#infoJs' + i);
    jsdiv.innerHTML = "<div id='js'>" + tableauNomPerso[i] +
      "<p>Taille : " + tableauTaillePerso[i] + "cm" + " </p><p>Poids : " + tableauPoidsPerso[i] + "kg" + "</p><p>Sexe : " + tableauSexePerso[i] + "</p></div>";
  }

  jsdiv = document.querySelector('#infoJs');
});

personnage.addEventListener("mouseover", function (event) {
  personnage.style.color = "#E7AE05";
  setTimeout(function () {
    personnage.style.color = "white";
  }, 1000);
}, false);

// Recup Evenements Bouton Film
let film = document.querySelector('#film');
film.addEventListener('click', function () {
  jsdiv = document.querySelector('#infoJs');

  case0.style.backgroundImage = "url('/resource/img/film/film1.jpg')"; case0.style.border = "thick solid #000";
  case1.style.backgroundImage = "url('/resource/img/film/film2.jpg')"; case1.style.border = "thick solid #000";
  case2.style.backgroundImage = "url('/resource/img/film/film3.jpg')"; case2.style.border = "thick solid #000";
  case3.style.backgroundImage = "url('/resource/img/film/film4.jpg')"; case3.style.border = "thick solid #000";
  case4.style.backgroundImage = "url('/resource/img/film/film5.jpg')"; case4.style.border = "thick solid #000";
  case5.style.backgroundImage = "url('/resource/img/film/film6.jpg')"; case5.style.border = "thick solid #000";
  case6.style.backgroundImage = "url('/resource/img/film/film7.jpg')"; case6.style.border = "thick solid #000";
  case7.style.backgroundImage = "url('/resource/img/film/film8.jpg')"; case7.style.border = "thick solid #000";
  case8.style.backgroundImage = "url('/resource/img/film/film9.jpg')"; case8.style.border = "thick solid #000";

  jsdiv.innerHTML = "<div id='js'>" + tableauTitreFilms[0] +
    "<p>Sortie : " + tableauSortieFilms[0] + " </p><p>Directeur : " + tableauDirecteurFilms[0] + "</p></div>";
  for (let i = 1; i < 9; i++) {
    jsdiv = document.querySelector('#infoJs' + i);
    jsdiv.innerHTML = "<div id='js'>" + tableauTitreFilms[i] +
      "<p>Sortie : " + tableauSortieFilms[i] + " </p><p>Directeur : </p><p>" + tableauDirecteurFilms[i] + "</p></div>";
  }

  jsdiv = document.querySelector('#infoJs');
});

film.addEventListener("mouseover", function (event) {
  film.style.color = "#E7AE05";
  setTimeout(function () {
    film.style.color = "white";
  }, 1000);
}, false);

// Recup Evenements Bouton Vaisseau
let vaisseau = document.querySelector('#vaisseau');
vaisseau.addEventListener('click', function () {
  jsdiv = document.querySelector('#infoJs');

  case0.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau0.jpg')"; case0.style.border = "thick solid #000";
  case1.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau1.jpg')"; case1.style.border = "thick solid #000";
  case2.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau2.webp')"; case2.style.border = "thick solid #000";
  case3.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau3.webp')"; case3.style.border = "thick solid #000";
  case4.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau4.jpg')"; case4.style.border = "thick solid #000";
  case5.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau5.jpg')"; case5.style.border = "thick solid #000";
  case6.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau6.jpg')"; case6.style.border = "thick solid #000";
  case7.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau7.jpg')"; case7.style.border = "thick solid #000";
  case8.style.backgroundImage = "url('/resource/img/vaisseau/vaisseau8.jpg')"; case8.style.border = "thick solid #000";

  jsdiv.innerHTML = "<div id='js'>" + tableauNomVaisseau[0] +
    "<p>Vitesse : " + tableauVitesseVaisseau[0] + " </p><p>Prix : " + tableauPrixVaisseau[0] + " crédit</p></div>";
  for (let i = 1; i < 9; i++) {
    jsdiv = document.querySelector('#infoJs' + i);
    jsdiv.innerHTML = "<div id='js'>" + tableauNomVaisseau[i] +
      "<p>Vitesse : " + tableauVitesseVaisseau[i] + " </p><p>Prix : " + tableauPrixVaisseau[i] + " crédit</p></div>";
  }

  jsdiv = document.querySelector('#infoJs');
});

vaisseau.addEventListener("mouseover", function (event) {
  vaisseau.style.color = "#E7AE05";
  setTimeout(function () {
    vaisseau.style.color = "white";
  }, 1000);
}, false);

// Recup Evenements Bouton Credits
let credits = document.querySelector('#cred');
credits.addEventListener('click', function () {
  console.log("Credits");
});

credits.addEventListener("mouseover", function (event) {
  credits.style.color = "#E7AE05";
  setTimeout(function () {
    credits.style.color = "white";
  }, 1000);
}, false);

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
    // On stocke nos données dans les Tableau
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
    // On stocke nos données dans les Tableau
    for (let i = 0; i < 6; i++) {
      tableauTitreFilms[i] = responseFilms.results[i].title;
      tableauSortieFilms[i] = responseFilms.results[i].release_date;
      tableauDirecteurFilms[i] = responseFilms.results[i].director;
    }
    // Ajout Manuel pour les trois derniers éléments qui ne sont pas générer en films par l'API
    tableauTitreFilms[6] = "Clone Wars"; tableauSortieFilms[6] = "2008-03-10"; tableauDirecteurFilms[6] = "George Lucas";
    tableauTitreFilms[7] = "Le Mandalorien"; tableauSortieFilms[7] = "2019-12-11"; tableauDirecteurFilms[7] = "Jon Favreau";
    tableauTitreFilms[8] = "The Book of Boba Fett"; tableauSortieFilms[8] = "2021-29-12"; tableauDirecteurFilms[8] = "Jon Favreau";
  },
});

// Récup des Vaisseau
$.ajax({
  url: "https://swapi.dev/api/starships/",
  method: "GET",
  success: function (responseVaisseau) {
    //On stocke nos personnages dans le Tableau
    for (let i = 0; i < 9; i++) {
      tableauNomVaisseau[i] = responseVaisseau.results[i].name;
      tableauVitesseVaisseau[i] = responseVaisseau.results[i].max_atmosphering_speed;
      tableauPrixVaisseau[i] = responseVaisseau.results[i].cost_in_credits;
    }
  },
});

  // Pour les images document.querySelector('#case'+i).innerHTML = response.results[i].name;