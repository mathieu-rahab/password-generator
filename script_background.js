
var style = document.createElement('style');
const eltTheme =['.menu',".result",".buttonMenu",".faq",".arrow",".contenairArrow1",".arrow2"];
var text_light, text_dark;


const imgSombres=["../img/background/img6.jpg"]
const imgClaires = [
"../img/background/img2.jpg",
"../img/background/img3.jpg",
"../img/background/img4.jpg",
"../img/background/img5.jpg"];
var imgActuel =imgClaires;



var iconState = "light";
function setTheme() {
 /*Fonction pour le bouton theme */ 

    var iconImage = document.getElementById("iconImage");
    var iconActu = document.getElementById("actu-logo");
    if (iconState === "light") {
      localStorage.setItem("theme", "dark");

      for(let i=0;i<eltTheme.length;i++){
       
        document.querySelector(`${eltTheme[i]}`).classList.add('dark-mode');}
        
        /*pour arrow before */
        style.innerHTML = '.arrow:before { border-color:#fefefe; }.arrow2:before { border-color:#fefefe; }';
        document.head.appendChild(style);
        




      const summary = document.querySelectorAll('summary');
      summary.forEach(label => {label.classList.add('dark-mode');});

      const logo_plus = document.querySelectorAll('.logo_plus');
      logo_plus.forEach(label => {label.classList.add('dark-mode');});

      const checkSelectLabels = document.querySelectorAll('.checkSelect');
      checkSelectLabels.forEach(label => {label.classList.add('dark-mode');});

      
        iconActu.src = "../img/actu_white.png";
        iconImage.src = "../img/moon.png";
        iconState = "dark";
        imgActuel=imgSombres;
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("background").style.backgroundImage= `url(${imgActuel[0]})`;}
    } 
    
    
    
    
    
    
    
    else {
      localStorage.setItem("theme", "light");

      for(let i=0;i<eltTheme.length;i++){
        console.log(i);
        document.querySelector(`${eltTheme[i]}`).classList.remove('dark-mode');}
    
    
      const summary = document.querySelectorAll('summary');
      summary.forEach(label => {label.classList.remove('dark-mode');});
      var arrowBeforeElement = document.querySelector('.arrow:before');

      /*pour arrow before */
      style.innerHTML = '.arrow:before { border-color:black; }';
      document.head.appendChild(style);
    

      const checkSelectLabels = document.querySelectorAll('.checkSelect');
      checkSelectLabels.forEach(label => {label.classList.remove('dark-mode');});

      const logo_plus = document.querySelectorAll('.logo_plus');
      logo_plus.forEach(label => {label.classList.remove('dark-mode');});


        iconActu.src = "../img/actu_black.png";
        iconImage.src = "../img/sun.png";
        iconState = "light";
        imgActuel=imgClaires;
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("background").style.backgroundImage= `url(${imgActuel[0]})`;}
    }
    
    var buttonText = document.getElementById("buttonText");
    buttonText.textContent = (iconState === "light") ? text_light : text_dark;}


  



$(document).ready(function() {
     
  const lang= document.documentElement.lang;
  if (lang =="fr"){text_light = "Mode Claire"; text_dark="Mode sombre"}
  if (lang =="en"){text_light = "Light mode"; text_dark="Dark mode"}
  if (lang =="es"){text_light = "modo claro"; text_dark="Modo oscuro"}





  /*si l'utilisateur est deja venu consulte son dernier theme */
  if(localStorage.getItem("theme")=='dark'){
    iconState='light';
    setTheme();
  }

  const buttonMenu = document.getElementById('buttonMenu');
  const buttonMenuClose = document.getElementById('buttonMenuClose');
  const sideMenu = document.getElementById('sideMenu');
  
  buttonMenu.addEventListener('click', () => {
    sideMenu.style.right = '10px';});
  
  buttonMenuClose.addEventListener('click', () => {
    sideMenu.style.right = '-310px';});


  document.addEventListener('click', (event) => {
    /*si je clique en dehors, le panel ce ferme */
    const targetElement = event.target;
    if (!sideMenu.contains(targetElement) && !buttonMenu.contains(targetElement)) {
      sideMenu.style.right = '-310px';}});



  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("PC");
   

    
    const generator = document.getElementById("background");
    var index = Math.floor(Math.random() * imgActuel.length);
    generator.style.backgroundImage = `url(${imgActuel[index]})`;

  var precedent = index;
  

  
  setInterval(() => {
    index = Math.floor(Math.random() * imgActuel.length);
    if(precedent == index){index=(index+1)%imgActuel.length;}
    precedent = index;
    generator.style.backgroundImage = `url(${imgActuel[index]})`;
  
  }, 15000);}
  else{
    document.getElementById("background").style.backgroundColor='#1c1c1e';
 
    document.querySelector("span").innerHTML = ""; 

    document.getElementById("buttonMenu").style.width = "50px"; // ou "50%" ou "10vw"


}




});