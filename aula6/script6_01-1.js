var x=[2020,2,"Hoje"];
x[0]++;//2021  ++ +=1 soma 1
x[1]=x[0]%2;//1
x[2]+=" em dia";//"Hoje em dia"


document.querySelector("#dv1").innerHTML=x[0];
document.querySelector(".teste").innerHTML=x[1]+" "+x[2];

/*
na área roxa apareça o valor da posição 0
na área amarela apareçam os valores da posição 1 e da posição 2

*/

