//Varias oportunidades con for//

let num_objetivo = 12;
let opr = 3;

for(let i = 0 ; i < 3 ; i++){   
    num_jugador = prompt("Intento numero "+(i+1)+" Dime un numero");
    if(num_jugador == num_objetivo){

        console.log("Enorabuena");

        break;
    }
}

//Varias oportunidades con while//
let i = 0;
while( i < 3 ){
    num_jugador2 = prompt("Parte 2, numero de intento "+(i+1)+" Dime un numero")
    if(num_jugador2 == num_objetivo){
        console.log("Enorabuena");
        break;
    }
}