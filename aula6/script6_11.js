const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_login=document.querySelector("#login");
const tag_h2=document.querySelector("h2");

var uf=["SP","RJ","AC","TO","MG"];
// document.write(uf+"<hr>");
id_dv.innerHTML=uf;
uf.sort();
class_teste.innerHTML=uf;
// document.write(uf+"<hr>");
// uf.reverse();
// document.write(uf+"<hr>");
id_login.value=uf;