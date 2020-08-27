/*
Implementar la función convertirACelsius(grados), que recibe una cantidad de grados 
en Fahrenheit y los convierte a Celsius.

Nota: fórmula: ((grados-32)*5/9 )
*/

function convertirACelsius(grados){
    return ((grados - 32)*5/9);
}

let losgrados = parseFloat(prompt('Ingrese los grados Farenheit'));
alert(convertirACelsius(losgrados));