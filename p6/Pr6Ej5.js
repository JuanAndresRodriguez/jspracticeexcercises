/*
Implementar la siguiente función en JS: function invertir(palabra)

Recibe una palabra y la retorna invertida. Ej: recibe: “hola mundo”, retorna :
 “odnum aloh”
*/

function invertir(palabra){
    let nuevapalabra = '';
    for(let i = palabra.length - 1; i >= 0; i--){
        nuevapalabra = nuevapalabra + palabra[i];
    }
    return nuevapalabra;
}

let lapalabra = String(prompt('revierta su frase'));
alert(invertir(lapalabra));