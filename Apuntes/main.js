//Numero aleatorio//Math.flor-->Redondeo numero//Math.random-->Numero aleatorio//

//Con la variable y numero del 1 al 12//

let nombre_variable2 = Math.floor(Math.random() * 12)+1
//Con la constante y numero del1 al 24//

const nombre_constante = Math.floor(Math.random() * 24)+1

//Para hacer comparaciones de numeros//

//Cuando queramos comparar un numero igual a otro//
if(nombre_constante == nombre_variable){
}

//Cuando queremos comparar para que no sea igual a otro//
if(nombre_constante != nombre_variable){
}

//Para comparar con mayor//
if(nombre_constante > nombre_variable){
}

//Para comparar con menor//
if(nombre_constante < nombre_variable){
}

//Para sumar numeros//
const suma1 = Math.floor(Math.random() * 2)
const suma2 = Math.floor(Math.random() * 2)
const suma3 = Math.floor(Math.random() * 2)
const suma_total = suma1 + suma2 + suma3
//Para juntar numeros//
const suma4 = Math.floor(Math.random() * 2)
const suma5 = Math.floor(Math.random() * 2)
const suma6 = Math.floor(Math.random() * 2)
const suma_total2 = "" + suma4 + suma5 + suma6


//Alertas, console.log y promt//

//Alerta sale en la web sin dejar escribir//
alert("Hola compañeros")
alert(suma_total2)
//Console.log sale en la consola solo a no ser de que le metamos un alert o promt//
console.log = ("Hola compañeros")
console.log = (suma_total2)


//Promt sale en la web y nos deja escribir en el y crear variables sobre lo que escribas//
prompt("Escribe un numero")
let numero = prompt ("Escribe un numero")


//If y else//

//Utilizaremos el if para cuando queramos decir si esto es como tal pasara esto//
if (numero == 5){
    alert("Bravo lo has adivinado")
}

//Utilizaremos el esle tras un if cuando no ocurra el if el resto de casos iran al else//
else{
    alert("Ooooooh no has adivinado el numero")
}

//Cuando queramos comprobar si se han cumplido varios intentos utilizaremos el if asi//
if(num1 == tu_num1 || num2 == tu_num2){
    alert("Bravo has pasado al nivel 2")
}

//Te dice la longitud del array//
const miArray1 = ["David","Juan","Carlos"];
let cant = miArray1.length;
console.log(cant);

let numero1 = miArray1[0];//Primer elemento array//
let numero2 = miArray1[1];//Segundo elemento array//
let numero3 = miArray1[2];//Tercer elemento array//

//Uso del push//
const miArray2 = ["David","Juan","Carlos"];
console.log(miArray2);//Vemos 3 elementos//
miArray2.push("Oscar");
console.log(miArray2);//vemos 4 elementos//
//Tambien hay otros usos para el push para sacar objetos de un Array//
let Baraja = [1,2,3,4,5,6,7,8,9,10,11,12];
 //Mezclamos//
shuffleArray(Baraja);
let Jugador1 = [];
Jugador1.push[1];
Jugador1.push[7];
Jugador1.push[2];
Jugador1.push[4];


//La variable comienza desde el 0 por el (i = 0)//
//Luego con el (i < miArray1.length) es la condicion para que imprima hasta antes de superar la longitud del array//
for(let i = 0; i < miArray1.length; i++){//Imprime todos los nombres//
    console.log(miArray1[i]);
};

//Crear un Objeto//
const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Pizza",
};

//Imprime solo lo que le pedimos//
let edad = persona[0].edad;
console.log(edad);
//-----------------------------//
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

let marcas1 = coche[0].marca;
let marcas2 = coche[1].marca;
let marcas3 = marcas1 +  " " + marcas2;
console.log(marcas3); 

//Creamos varios objetos//
const persona2 = [{
    nombre: "David",
    edad: 24,
    comidaFavorita: "Pizza",
},
{
    nombre: "Javier",
    edad: 16,
    comidaFavorita: "Hamburgesa"
},
{
    nombre: "Raul",
    edad: 38,
    comidaFavorita: "Ensalada"
},
{
    nombre: "Alicia",
    edad: 45,
    comidaFavorita: "Tortilla"
},
];

//Da el array tal cual//
for(let i = 0; i < persona2.length; i++){
    console.log(persona2[i]);
};

//Da el array 1 a 1//
for(let i = 0; i < persona2.length; i++){
    console.log("=======================");
    console.log("Nombre: " + persona2[i].nombre);
    console.log("Edad: " + persona2[i].edad);
    console.log("Comida Favorita" + persona2[i].comidaFavorita);
};

//Para sacar el ultimo del Array//
let UltimoObjeto = persona2.pop();
console.log(UltimoObjeto);

//Para mezclar el Array//
shuffleArray(persona2);

//El sort se usa para ordenar un array//
let NumerosPotencia = [2,4,6,8,10,12];
console.log(NumerosPotencia);
NumerosPotencia.sort();
console.log(NumerosPotencia);

//Uso del while para varias oportunidades//
let num_objetivo = 3;
let i = 0;
while(num_objetivo = 3){
    num_jugador2 = prompt("Escoge numero")
    if(num_jugador2 == num_objetivo){
        alert("Enorabuena");
        break;
    }
}
//for como while para hacer bucles//
for(y = 0; y < 3;){
    num_jugador = prompt("Escoge numero");
    num_objetivo2 = 5;
    if(num_jugador == num_objetivo2){
        alert("Muy bien");
        break;
    };
};

//Funciones y usos//
function Doble(nn){
    return nn + nn;
};

function Salurdar(nombre){
    return "Hola " + nombre;
};
let Nombrecito = prompt("Dime tu nombre");
console.log(Salurdar(Nombrecito))

//Usos del document.getElementById//
let elemento1 = document.getElementById('Boton');
document.getElementById('Boton').addEventListener('click',() => {
    alert('Boton clickeado');
});

//Sacar o Poner  elementos en array//
const numeros = [1, 2, 3, 4, 5];

// Añadir elementos al final//
numeros.push(6); 
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// Eliminar el último elemento//
numeros.pop(); 
console.log(numeros); // [1, 2, 3, 4, 5]

// Añadir elementos al inicio//
numeros.unshift(0);
console.log(numeros); // [0, 1, 2, 3, 4, 5]

// Eliminar el primer elemento//
numeros.shift();
console.log(numeros); // [1, 2, 3, 4, 5]