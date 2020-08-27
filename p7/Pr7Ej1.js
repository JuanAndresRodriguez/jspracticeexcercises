/*
Hacer una función que recibe n y retorna la suma de 
todos los números entre 1 y n.
*/

function sumaDeUnoAn(n){
    let total = 0;
    for(let i = 1; i<= n; i++){
        total = total + i;
    }
    return total;
}

var numero = parseInt(prompt('Ingrese n'));
alert(sumaDeUnoAn(numero));