/*
Implementar la siguiente función en JS: function empiezaYTermina(texto)

Recibe un texto y retorna si empieza y termina con la misma letra
*/

function empiezaYTermina(texto){
    let empieza = texto[0].toUpperCase();
    let termina = texto[texto.length-1].toUpperCase();
    if (empieza == termina){
        return true;
    }else{
        return false;
    }
}

let eltexto = String(prompt('Ingrese el texto'));
alert(empiezaYTermina(eltexto));