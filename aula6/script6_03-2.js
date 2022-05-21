var semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA","SEXTA", "SÁBADO"];
for (var i = 0; i < 7; i++){
 //document.write(semana[i] + " é o " + (i+1) + "o dia da semana!<br>");
    document.querySelector(".teste").innerHTML+=semana[i] + " é o " + (i+1) + "o dia da semana!<br>";
}
/*
substituir o document.write, por queryselector direcionando 
para a área amarela o conteúdo:
semana[i] + " é o " + (i+1) + "o dia da semana!<br>"

*/