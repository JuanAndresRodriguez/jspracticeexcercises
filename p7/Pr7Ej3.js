/*
Implementar una función que dados dos parámetros numéricos, 
retorne verdadero si alguno de los números es 50 o si la suma de ellos lo es.
*/

function esCincuenta(p1,p2){
    return p1 == 50 || p2 == 50 || (p1+p2) == 50;
}

let param1 = parseInt(prompt('Ingrese parametro uno'));
let param2 = parseInt(prompt('Ingrese parametro dos'));
alert(esCincuenta(param1,param2));