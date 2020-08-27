/*
Implementar la siguiente función en JS: function cantidadPalabras(frase)

Recibe una frase, retorna la cantidad de palabras que contiene. 
Una palabra se considera separada de otra por un espacio en blanco exclusivamente.
*/

function cantidadPalabras(frase){
    let cantPalabras = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == ' '){
            cantPalabras++;
        }
    }
    return cantPalabras+1;
}

let lafrase = String(prompt('Inserte su frase'));
alert(cantidadPalabras(lafrase));