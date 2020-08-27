/*
Hacer una función que muestre las tablas de multiplicar del 1 al 10
*/

function tablasDelCeroAlDiez(){
    for(var multip = 0; multip <= 10; multip++){
        for(var i = 0; i <=10; i++){
            var result = multip * i;
           console.log(multip+ ' * ' + i + ' = ' + result);
        }
    }
}

tablasDelCeroAlDiez();