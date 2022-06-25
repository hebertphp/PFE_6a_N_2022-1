function mostrar(){
    const result=document.querySelector("#result");

    result.innerHTML="Resultado:";
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