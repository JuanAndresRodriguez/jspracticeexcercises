/*
Implementar la siguiente función en JS: function esPalindromo(frase)

Recibe una frase (se asume sin espacios en blanco) y 
retorna true si es palíndroma, esto es que se lee igual de izquierda a derecha y 
de derecha a izquierda. Ejemplo: ANILINA
*/

function esPalindromo(frase){
    let derecho = frase.toUpperCase();
    let reves = '';
    for(let i = frase.length - 1; i >= 0; i--){
        reves = reves + derecho[i];
    }
    return derecho == reves;
}

var lafrase = String(prompt('Ingrese frase'));
alert(esPalindromo(lafrase));