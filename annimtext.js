$(document).ready(function() {


var element = document.getElementById('annimH1');

// On définit le texte à afficher
var text ;
const lang= document.documentElement.lang;
if (lang =="fr"){text="Questions fréquentes sur le générateur de mots de passe ?";}
if (lang =="en"){text="Frequently asked questions about the password generator ?";}
if (lang =="es"){text="¿Preguntas frecuentes sobre el generador de contraseñas?";}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var h1spy ="";
for(let i=0;i<text.length;i++){
  h1spy += "*";}

  element.textContent = h1spy;



// On initialise une variable qui va compter le nombre de lettres affichées
var index = 0;

// On crée une fonction qui va changer le texte
function changerTexte() {
  // On vérifie si on a affiché tout le texte
  if (index < text.length) {
    // On remplace le caractère à la position index par la lettre correspondante
    element.innerHTML = element.innerHTML.substring(0, index) + text[index] + element.innerHTML.substring(index + 1);
    // On augmente l'index de 1
    index++;
    // On appelle la fonction à nouveau après un délai de 100 millisecondes
    setTimeout(changerTexte, 35);
  }
}


// On crée une fonction qui va vérifier si l'élément est visible
function estVisible(element) {
  // On récupère la position de l'élément par rapport au haut de la page
  var position = element.getBoundingClientRect().top;
  // On retourne vrai si la position est inférieure à la hauteur du viewport
  return position < window.innerHeight;
}

// On crée une fonction qui va lancer l'animation si l'élément est visible
function lancerAnimation() {
  // On vérifie si l'élément est visible
  if (estVisible(element)) {
    // On appelle la fonction changerTexte définie précédemment
    changerTexte();
    // On enlève l'événement scroll pour éviter de relancer l'animation
    window.removeEventListener("scroll", lancerAnimation);
  }
}

// On ajoute un événement scroll qui va appeler la fonction lancerAnimation à chaque fois que l'utilisateur fait défiler la page
lancerAnimation();
window.addEventListener("scroll", lancerAnimation);}

else{element.textContent = text;

}
});