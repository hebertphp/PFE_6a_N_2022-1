var nome=["Márcio","Josileia","Marcus","Astrogildo","Naruto","Luffy","Goku"];

var class_teste=document.querySelectorAll(".teste");

document.querySelector("#nome").innerHTML=nome[4]+" amigo do "+nome[5];
document.querySelector("h2").innerHTML+=nome[2];

// document.querySelector(".teste").innerHTML=nome.length;//7

class_teste[3].innerHTML="Será que mudou? "+nome.length;
class_teste[2].innerHTML="<img src='img/floresta.jpg'>";
class_teste[1].innerHTML="<img src='img/floresta.jpg'>";