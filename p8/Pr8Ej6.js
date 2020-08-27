/*
Se tiene información de un censo. Cada familia encuestada tiene entre 0 y 12 hijos. 
Implementar una función que recibe un array donde cada posición contiene la cantidad
de hijos de una familia y retorne un array donde cada posición es la cantidad total 
de familias con 12, con 11, ... , con 0 hijos
*/

function familiasConXHijos(hijos){
    let res = [];
    for (let i = 0; i <=12; i++){
        res[i]=0;
    }
    for(let i = 0; i< hijos.length; i++){
        let can = hijos[i];
        res[12-can]++;
    }
    return res;
}

let hijosxfamilia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 1, 2, 3, 4 ,5 ,11];
alert(familiasConXHijos(hijosxfamilia));