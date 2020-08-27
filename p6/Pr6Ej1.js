/*
Implementar una función que convierta la edad de un perro en “años humanos”, 
multiplicándose por 7.
*/

function edadPerroAHumano(edad){
    let añosPerro = 7*edad;
    return añosPerro;
}

let laedad = parseFloat(prompt('insterte edad'));
alert(edadPerroAHumano(laedad));
