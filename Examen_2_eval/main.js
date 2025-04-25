//Funcion que solo suma numeros pares//
function sumarPares(array){

    let suma = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            suma += array[i];
        };
    };
    return suma;
};

misuma = sumarPares([1,2,3,4,5,6,7,8]);
console.log(misuma);


//Funcion que invierta array sin reverse//
function InvertirArray(miArray){

    let array_invertido = [];

    for(let i = miArray.length-1 ; i >= 0; i--){
        array_invertido.push(miArray[i]);
    };
    return array_invertido;
};

let ejemplo1 = InvertirArray(["a","b","c","d"]);
console.log(ejemplo1);

//Funcion menor 4 y menor16//

function menor2(a,b){
    if (a<b)
        return a;
        else  return b;
};

console.log(menor2(4,5));

function menor4 (a,b,c,d){
    let m1 = menor (a,b);
    let m2 = menor (c,d);

    return menor2(m1,m2);
}

console.log(menor4(4,6,2,9));

function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    let m3 = menor4(a,b,c,d);
    let m4 = menor4(e,f,g,h);
    let m5 = menor4(i,j,k,l);
    let m6 = menor4(m,n,o,p);

    return menor4(m3,m4,m5,m6);
}

console.log(menor16(1,5,6,8,4,10,25,-6,48,95,2,4));

//Menor 15//

function menor3(a,b,c){
    let m7 = menor2(a,b);
    return menor2(m7,c);

}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
    let m9 = menor3(a,b,c);
    let m10 = menor3(d,e,f);
    let m11 = menor3(g,h,i);
    let m12 = menor3(j,k,l);
    let m13 = menor3(m,n,o);

    let m14 = menor3(m9,m10,m11);
    return menor3(m14,m12,m13);

}

console.log(menor15(1,5,6,8,4,10,25,-6,48,95,2));

//Intercambia las posiciones de los datos del array//

const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begona"];
let aux = aPersonas[1];
aPersonas[1] = aPersonas[2];
aPersonas[2] = aux;

//Crea una matriz de 3x3 numerica//

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz);
console.log(matriz[1][2]); ///Imprime solo el numero de 6//

//Crear un objeto que modele a un alumno con su nombre, lista y saignatura//
let alumno = {
    nombre:"David",
    nLista:15,
    asignatura:"ISO"
};
console.log(alumno);

//Haz una funcion que deculva el lanzamiento de un dado de 10 caras//
function Dado10(){
    return Math.floor(Math.random()* 10)+1;
}

//Codigo en javascrip que al pulsar al boton ponga verde el texto//
 const miBoton = document.getElementById("miBoton");
 
 miBoton.addEventListener('click' , () => {
    let parra = document.getElementById("miParrafo");
    parra.style.color="green";
 });