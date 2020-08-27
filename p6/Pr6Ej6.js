/*
Implementar la siguiente función en JS: function vecesLetra(frase, letra)

Recibe una frase y una letra, retorna cuántas veces aparece 
esa letra en la frase recibida. 
Ejemplo: recibe: “hoy es viernes” y “a”, retorna 0.
*/

function vecesLetra(frase, letra){
    let veces = 0;
    frase = frase.toUpperCase();
    letra = letra.toUpperCase();
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra){
            veces++;
        }
    }
    return veces;
}

var lafrase = String(prompt('Ingrese la frase'));
var laletra = String(prompt('Ingrese la letra'));
alert(vecesLetra(lafrase, laletra));
