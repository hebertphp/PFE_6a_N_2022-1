const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_login=document.querySelector("#login");
const tag_h2=document.querySelector("h2");

var valores=[10,20,30,40,50];
// document.write(valores+"<hr>");
id_dv.innerHTML=valores;
valores.shift();
// document.write(valores+"<hr>");
class_teste.innerHTML=valores;
valores.pop();
// document.write(valores);