/*
Implementar la siguiente función en JS: function humanizar(numero)

Recibe un número y lo retorna en formato “humanizado”. 
Ej: recibe 1, retorna: 1ero recibe 2, retorna 2do. Recibe 3, retorna 3ero. 
Para todos los demás, retorna el número con o: 123, retorna 123o.
*/

function humanizar(numero){
    let nuevonum = '';
    if (numero == 1 || numero == 3){
        nuevonum = String(numero)+"ero";
    }else if(numero == 2){
        nuevonum = String(numero)+"do";
    } else {
        nuevonum = String(numero)+"o";
    }
    return nuevonum;
}

let elnumero = parseInt(prompt('Ingrese Numero'));
alert(humanizar(elnumero));