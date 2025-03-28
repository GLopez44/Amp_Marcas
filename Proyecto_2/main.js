//Push meter valor y pop sacar valor//


let NumerosDePie = [12,35,47,48];

// console.log(aNumerosDePie[0]);

// console.log(aNumerosDePie[2]);

for(let index = 0; index < NumerosDePie.length; index++){
    console.log(NumerosDePie[index]);
}

NumerosDePie.push(38);

console.log("Despues")

NumerosDePie.forEach((valor,indice) => {
    console.log(valor);
});

let UltimoElemento = NumerosDePie.pop();

console.log("Despues Despues")

NumerosDePie.forEach((valor,indice) => {
    console.log(valor);
});

console.log("El ultimo elemento fue" +" "+ UltimoElemento)

const Personas = ["Jose","Chema","Pepe","Bartolito","Begoña"];

let aux;
aux = Personas[2];
Personas[2] = Personas[3];
Personas[3] = aux;


Personas.forEach((valor,indice)=>{
    console.log(indice + " " + valor);
});

Personas.sort();

console.log(Personas);

let NumerosPotencia2=[32,64,128,16,8,4,2,1];

NumerosPotencia2.sort();

console.log(NumerosPotencia2);

NumerosPotencia2.sort((a,b)=> a -b);

console.log(NumerosPotencia2);

let fila1 = [1,2];
let fila2 = [5,7];

let matriz = [fila1, fila2];

console.log(matriz);

for(let index = 0; index < matriz.length; index++){
    const fila = matriz[index];
    for(let index2 = 0; index2 < fila.length; index2++){
        console.log("valor"+fila[i]);
    }
}