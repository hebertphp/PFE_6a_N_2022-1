function mostrar(nome){//criada, construida
    document.write(nome+", e aí, blz?");
}
function mediaf(av1,av2){
     return (av1+av2)/2;

}
function calc(numero1,numero2,operador){
    if(operador=="+"){
        return numero1+numero2;
    }
    else if(operador=="-"){
        return numero1-numero2;
    }
    else if(operador=="*"){
        return numero1*numero2;
    }
    else if(operador=="/"){
        return numero1/numero2;
    }
    else{
        return "operador não validado";
    }
}
mostrar("Epaminondas");//executar, chamar
document.write("<br>");
//var n1=parseFloat(prompt("Digite a nota 1"));
//var n2=parseFloat(prompt("Digite a nota 2"));
var x=mediaf(8,9);
document.write("Media: "+x);
document.write("<br>Outra Media:"+mediaf(6,9)+"<br>");
document.write(calc(10,2,"&"));
/*

if(condição){

}
else{

}

if(cond1){

}
else if(cond2){

}
else if(cond3){

}
else{

}
*/