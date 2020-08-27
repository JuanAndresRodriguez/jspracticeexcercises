/*
Dado un array y un valor, implementar una función que retorne el número 
más cercano al valor dado. El más cercano puede ser un valor superior o 
inferior. 
Si hubiera más de un posible resultado, retornar cualquiera de ellos.

Ejemplo:  datos: 10 18  23  4  -5  50 , valor: 19, el más cercano es 18
*/

function numeroMasCercano(numeros,valor){
    let masCercano = 0;
    let diferencia = Number.MAX_VALUE;
    for(let i = 0; i<= numeros.length; i++){
        if(Math.abs((numeros[i] - valor)) < diferencia){
            diferencia = Math.abs(numeros[i] - valor);
            masCercano = numeros[i];
        }
    }
    return masCercano;
}

let losnumeros = [10, 18, 23, 4, -5, 50];
let elvalor = 19;
alert(numeroMasCercano(losnumeros,elvalor));