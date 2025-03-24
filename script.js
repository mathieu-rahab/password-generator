
const Tabmin = 'abcdefghijklmnopqrstuvwxyz';
const Tabmaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Tabnb = '0123456789';
const Tabcarac_spec = '!@#$%^&*()_+~`|}{[]:;?,./-=';


var Listecarac ='';
var nbCasesCoches;
var idCaseCochee;
var very_weak, weak, good, strong, very_strong;



function actualisation(){
    /*remet les checkbox coché à f5 */
    document.getElementById("checkbox").reset(); 
    document.getElementById("nb_carac").value = "15";}


function ActiveCases(bool, color) {
    if (nbCasesCoches ==1){
        document.getElementById(idCaseCochee).disabled = bool;
        document.getElementById(idCaseCochee).style.backgroundColor = color;}}




function ActuCheckBox(){
    const Len_password = document.getElementById("nb_carac").value;
    Listecarac ='';
    
    ActiveCases(false, "");
    
    nbCasesCoches = 0;
    idCaseCochee = "";

    if ($('#min').is(':checked')) {
        Listecarac+= Tabmin;
        nbCasesCoches ++;
        idCaseCochee = "min";}

    if ($('#maj').is(':checked')) {
        Listecarac+= Tabmaj;
        nbCasesCoches ++;
        idCaseCochee = "maj";}

    if ($('#nb').is(':checked')) { 
        Listecarac+= Tabnb;
        nbCasesCoches ++;
        idCaseCochee = "nb";}
    
    if ($('#carac_spec').is(':checked')) {
        Listecarac+= Tabcarac_spec;
        nbCasesCoches ++;
        idCaseCochee = "carac_spec";}

    ActiveCases(true, "gray");

    return generatePassword(Len_password);}





function ActuNB(Len_password){
    document.getElementById('output').value = Len_password;
    badge(Len_password);
    return generatePassword(Len_password);}



function generatePassword(Len_password) {
    let password = '';
    let array = new Uint32Array(Len_password);
     window.crypto.getRandomValues(array);
     for (let i = 0; i < array.length; i++) {
        password += Listecarac.charAt(array[i] % Listecarac.length); }
     document.getElementById("password").innerHTML = password;}




function badge(Len_password){
    let color;
    let text;
    if(Len_password<= 5){
        color = "#F5203E";
        text = very_weak;}

    if(Len_password> 5 && Len_password <= 10){
        color = "#F5203E";
        text = weak;}

    if(Len_password> 10 && Len_password<= 13){
        color = "#F1C80B";
        text = good;}
    
    if(Len_password> 13 && Len_password< 20){
        color = "#43ED9C";
        text = strong;}
    
    if(Len_password>= 20){
        color = "#0070F6";
        text = very_strong;}

    document.getElementById("badge").innerHTML = text;
    document.getElementById("badge").style.backgroundColor = color;}   







$(document).ready(function() {
    
    
    
    const lang= document.documentElement.lang;
    if (lang =="fr"){very_weak = "très faible"; weak = "faible"; good ="bon"; strong ="fort"; very_strong = "très fort";}
    if (lang =="en"){very_weak = "very weak"; weak = "weak"; good ="good"; strong ="strong"; very_strong = "very strong";}
    if (lang =="es"){very_weak = "muy débil"; weak = "débil"; good ="bien"; strong ="fuerte"; very_strong = "muy fuerte";}


  

    badge(15);
    actualisation();
    ActuCheckBox();
  

    $('#min, #maj, #nb, #carac_spec').change(function() {
        ActuCheckBox();});
       

});





          
