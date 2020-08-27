/*
Implementar la función Buzz, que recibe un número natural n y retorna la palabra "buzz",
si el número es múltiplo de 3 o de 5; 
en otro caso retorna el mismo número
*/

function Buzz(n){
    if (n%3 == 0 || n%5 == 0){
        return "Buzz";
    }else{
        return n;
    }
}

let numeronatural = parseInt(prompt('Ingrese numero natural'));
alert(Buzz(numeronatural));