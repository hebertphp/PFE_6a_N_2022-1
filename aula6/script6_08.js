const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_login=document.querySelector("#login");
const tag_h2=document.querySelector("h2");

var notas=[10,9,8];
var outras_notas=[4,3,2,1];
// document.write(notas+"<hr>");//notas vai para id="dv"
id_dv.innerHTML=notas;
id_dv.style.color="red";
var novas_notas=notas.concat(7,6,5);
// document.write(novas_notas+"<hr>");//novas_notas vai para class="teste"
class_teste.innerHTML=novas_notas;
var junta_tudo=novas_notas.concat(outras_notas);
// document.write(junta_tudo+"<hr>");//junta_tudo vai para id="login"
id_login.value=junta_tudo;
