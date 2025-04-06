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

//