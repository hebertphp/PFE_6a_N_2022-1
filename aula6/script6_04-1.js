//       0  1  2  3  4  
var num=[10,20,30,40,50,12,34,56,78,44,54,67,88,90,2020];
var tam;
tam=num.length;//5
document.querySelector("#dv1").innerHTML="var num possui "+num.length+" valores<hr>";
document.querySelector("#dv1").innerHTML+="Todos os valores da var num: "+num+"<hr>";

document.querySelector(".teste").innerHTML="Valor da primeira posição de num: "+num[0]+"<hr>";
document.querySelector(".teste").innerHTML+="Valor da última posição de num: "+num[tam-1]+"<hr>";
/*
document.write("var num possui "+tam+" valores<hr>");
document.write("Todos os valores da var num: "+num+"<hr>");
document.write("Valor da primeira posição de num: "+num[0]+"<hr>");
document.write("Valor da última posição de num: "+num[tam-1]+"<hr>");

*/