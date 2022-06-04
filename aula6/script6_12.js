const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_login=document.querySelector("#login");
const tag_h2=document.querySelector("h2");

//       0  1  2   3  4
var x = [10,20,30,40,50,60,70,80];

//      0 0 1 2       1 0 1 2       2 0 1 2  
var m = [[1,2,3]   ,   [4,5,6]   ,   [7,8,9],[50,70,80,90],["SP","RJ"],[100,200,300,[400,500]]];

id_dv.innerHTML=x.length;

class_teste.innerHTML=m[5][3][1];
id_login.value=m[3].length;
// id_login.value=m[1][0];
/*
mostrar os dois comandos para mostrar o valor 4,
baseados na var m, direcionar para id_login
id_login.value=m[1][0]
id_login.value=m[3].length;
*/