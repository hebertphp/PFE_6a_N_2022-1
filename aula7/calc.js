function mostrar(){
    const result=document.querySelector("#result");
    const num1=document.querySelector("#num1");
    const num2=document.querySelector("#num2");
    const op=document.querySelector("#op");

    result.innerHTML=num1.value+"<br>"+op.value+"<br>"+num2.value+"<br>------<br>";
    result.innerHTML+=calc(parseFloat(num1.value),parseFloat(num2.value),op.value);
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