//        0     1     2      3
var nota=[10 , 8.5 , 7.75 , 9.5];//essa aqui
var num=[];
num[0]=120;
num[1]=200;
num[2]=2020;
var nome=new Array("Jose","Paula","Carla");

document.querySelector("h2").innerHTML+=" "+nota+" "+nota[2];
document.querySelector("#dv1").innerHTML=num[1];
document.querySelector(".teste").innerHTML=nome[2];
/*
Todos os valores de nota substituir na tag h2, adicionar o valor 7.75 (vir da var nota)
Todos os valores de num na área roxa, 200 (vir da var num)
Todos os valores de nome da área amarela, Carla (vir da var nome)
*/