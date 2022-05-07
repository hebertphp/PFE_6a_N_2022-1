var num,calc;
num=parseInt(prompt("Digite um número inteiro"));
calc=num%2;
if(calc==1){
    document.write(num+" - Ímpar");
}
else{
    document.write(num+" - Par");
}
/*
Elaborar um código Javascript para dado um número inteiro, verificar se o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR 
*/