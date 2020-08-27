/*
Escribir un función que reciba un array cargado con números y retorne verdadero si 
dichos números ya están ordenados en forma estrictamente ascendente.
*/

function estanOrdenados(numeros){
    let ordenados = true;
    let i = 0;
    while( i < numeros.length && ordenados){
        if(numeros[i] > numeros[i+1]){
            ordenados = false;
        }
        i++;
    }

    return ordenados;
}

let losnumeros1 = [1, 2, 3, 4, 5];
let losnumeros2 = [1, 2, 2, 3, 4];
let losnumeros3 = [1, 2, 1, 3, 4];

alert(estanOrdenados(losnumeros1));
alert(estanOrdenados(losnumeros2));
alert(estanOrdenados(losnumeros3));