/*
Implementar una función que retorne la circunferencia a partir del radio.
*/

function circunferencia(radio){
    return Math.PI*radio*2;
}

let elradio = parseFloat(prompt('Ingrese radio y obtenga circunferencia'));
alert(circunferencia(elradio));