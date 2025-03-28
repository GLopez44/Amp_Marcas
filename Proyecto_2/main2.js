function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}

let Baraja = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(Baraja); 

shuffleArray(Baraja);

console.log(Baraja);

//Jugador 1 

let Jugador1 = [];
Jugador1.push(Baraja[0]);
Jugador1.push(Baraja[4]);
Jugador1.push(Baraja[8]);

console.log("Mano del jugador 1");
console.log(Jugador1);

//Jugador 2

let Jugador2 = [];
Jugador2.push(Baraja[1]);
Jugador2.push(Baraja[5]);
Jugador2.push(Baraja[9]);

console.log("Mano del jugador 2");
console.log(Jugador2);

//Jugador 3

let Jugador3 = [];
Jugador3.push(Baraja[3]);
Jugador3.push(Baraja[6]);
Jugador3.push(Baraja[10]);

console.log("Mano del jugador 3");
console.log(Jugador3);

//Jugador 4

let Jugador4 = [];
Jugador4.push(Baraja[4]);
Jugador4.push(Baraja[7]);
Jugador4.push(Baraja[11]);

console.log("Mano del jugador 4");
console.log(Jugador4);

//Ver cartas mas altas

//Jugador1

let suma1 = 0;

for(let i = 0; i < Jugador1.length; i++){

    suma1 = suma1 + Jugador1[i];

};
console.log("Calidad de la mano Jugador1="+suma1);

//Jugador2

let suma2 = 0;

for(let i = 0; i < Jugador2.length; i++){

    suma2 = suma2 + Jugador2[i];

};
console.log("Calidad de la mano Jugador2="+suma2);

//Jugador3

let suma3 = 0;

for(let i = 0; i < Jugador3.length; i++){

    suma3 = suma3 + Jugador3[i];

};
console.log("Calidad de la mano Jugador3="+suma3);

//Jugador4

let suma4 = 0;

for(let i = 0; i < Jugador4.length; i++){

    suma4 = suma4 + Jugador4[i];

};
console.log("Calidad de la mano Jugador4="+suma4);

//Hacer funcion de calidad

function calidad(miArray){
    let suma = 0;
    for (let i = 0; i < miArray.length; i++) 
        {
            suma = suma + miArray[i];  
        }
        return suma;
}

console.log("calidad de la mano jugador 1 "+calidad(Jugador1));
console.log("calidad de la mano jugador 2 "+calidad(Jugador2));
console.log("calidad de la mano jugador 3 "+calidad(Jugador3));
console.log("calidad de la mano jugador 4 "+calidad(Jugador4));
console.log(calidad(Jugador1));
//Decir que jugador va peor y cual mejor
