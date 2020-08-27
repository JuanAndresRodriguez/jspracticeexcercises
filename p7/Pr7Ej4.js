/*
Implementar una función que dado 3 parámetros numéricos, 
retorne verdadero si el último dígito de cada uno de los números 
ingresados son iguales.
*/

function ultimosDigitosIguales(p1,p2,p3){
    return p1%10 == p2%10 && p2%10 == p3%10;
}

let param1 = parseInt(prompt('Ingrese primer numero'));
let param2 = parseInt(prompt('Ingrese segundo numero'));
let param3 = parseInt(prompt('Ingrese tercer numero'));

alert(ultimosDigitosIguales(param1,param2,param3));