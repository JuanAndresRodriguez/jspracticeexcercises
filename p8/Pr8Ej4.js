/*
Se tiene una caja fuerte rodeada de 100 sensores de alarma. 
Cada sensor puede estar prendido o no. Implementar una función que reciba el array 
con la información de los sensores y retorne la cantidad de sensores que cumplen que 
él y sus dos vecinos están prendidos.

Ejemplo con 10 sensores: [true, true, false, true, true, true, true, true, false, true], 
retorna 4
*/

function sensorPrendidoYVecinos(sensores){
    let cantidad = 0;
    if (sensores[0] == true && sensores[1] == true){
        cantidad++;
    }
    if(sensores[sensores.length] == true && sensores[sensores.length -1] == true){
        cantidad++;        
    } 
    for(let i = 1; i< sensores.length; i++){
        if(sensores[i-1] == true && sensores[i] == true && sensores[i+1] == true){
                cantidad++;
            }
    }
    return cantidad;
    
}

let lossensores = [true, true, false, true, true, true, true, true, false, true];

alert(sensorPrendidoYVecinos(lossensores));