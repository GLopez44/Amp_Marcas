let Numero = [7,9,5,8,2,4];

let Persona = [{
    edad: 19,
    nombre: "David",
    Ciudad: "Madrid",
},{
    edad: 17,
    nombre: "Gonzalo",
    Ciudad: "Barcelona",
}
];

console.log(Persona)

console.log(Numero);

for(let i = 0; i < Persona.length; i++){
    console.log("=========================");
    console.log(Persona[i].edad);
    console.log(Persona[i].nombre);
    console.log(Persona[i].Ciudad);
};

Numero.sort();
console.log(Numero)

let Utilimo_Numero = Numero.pop();
console.log(Utilimo_Numero);

let Numero1 = [];
Numero1.push(Numero[2])
Numero1.push(Numero[1])
console.log(Numero1)

let Ciudad = Persona[0].Ciudad;
console.log(Ciudad);

let Ciudad2 = Persona[1].Ciudad;
console.log(Ciudad2);


const Animales = [{
    nombre: "Cebra",
    color : "Blanco y negro",
    ubicacion : "Sabana",
},
{
    nombre: "Leon",
    color : "Amarillo",
    ubicacion : "Sabana",
},
{
    nombre: "Agila",
    color : "Pardo",
    ubicacion : "Bosque", 
}];

for(i = 0; i < 1; i++){
    console.log(Animales);
}

for(i = 0; i < Animales.length; i++){
    console.log("======================")
    console.log(Animales[i].nombre);
    console.log(Animales[i].color);
    console.log(Animales[i].ubicacion);
}


for(y = 0; y < 3;){
    num_jugador = prompt("Escoge numero");
    num_objetivo2 = 5;
    if(num_jugador == num_objetivo2){
        alert("Muy bien");
        break;
    };
};

function Doble(nn){
    return nn + nn;
};
let Numerin = 3;
console.log(Doble(Numerin));

function incrementa3(n){
    return n + 3;
};
console.log(incrementa3(Numerin));

let Numerito = 7;
console.log(incrementa3(Numerito));

function Salurdar(nombre){
    return "Hola " + nombre;
};
let Nombrecito = prompt("Dime tu nombre");
console.log(Salurdar(Nombrecito))

console.log(Animales);

let coche = [{
    marca: "Toyota",
    color: "Blanco",
    año: "2008",
},
{
    marca: "Nisan",
    color: "Negro",
    año: "2012",
}];

let marcas1 = coche[1].marca;
let marcas2 = coche[0].marca;
let marcas3 = marcas1 +  " " + marcas2;
console.log(marcas3);
for(i = 0; i < coche.length; i++){
    console.log("==============")
    console.log(coche[i].marca);
};