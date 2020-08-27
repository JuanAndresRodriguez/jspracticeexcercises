/*
Implementar la siguiente función en JS: function invertirCase(frase)

Recibe una frase y la retorna cambiando mayúsculas por minúsculas y viceversa.
Ej: recibe “Hola”, retorna “hOLA”
*/

function invertirCase(frase){
    let frasenueva = '';
    for(let i = 0; i<= frase.length; i++){
        if(frase.charAt(i) == frase.charAt(i).toUpperCase()){
            frasenueva = frasenueva + frase.charAt(i).toLowerCase();
        }else{
            frasenueva = frasenueva + frase.charAt(i).toUpperCase();
        }
    }
    return frasenueva;
}

let lafrase3 = String(prompt('Ingrese frase'));
alert(invertirCase(lafrase3));