/*
Implementar la siguiente función en JS: function abreviar(frase)

Recibe una frase y la retorna abreviada (si es de largo mayor a 5). 
Ejemplo: recibe “Hoy es lunes”, retorna: “Hoy e…”
*/

function abreviar(frase){
    let abreviada = '';
    if (frase.length > 5){
        for(let i = 0; i < 5; i++){
            abreviada = abreviada + frase[i];
        }
        abreviada = abreviada+"...";
    }else{
        abreviada = frase;
    }
    return abreviada
}

let lafrase2 = String(prompt('Inserte frase'));
alert(abreviar(lafrase2));