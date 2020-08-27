/*
Para poner moquette en una habitación rectangular se pueden combinar distintos recortes.
Se tienen varios trozos rectangulares.
De cada uno se sabe largo y ancho. Esa información está en un array.

Ej. 2 4 1 3 5 6 son 3 trozos (de 2*4, 1*3 y 5*6, totalizando 41 m2).

Implementar una función que reciba el array y el tamaño de la habitación y retorne si la
cubre o no.
*/

function cubreONo(recortes, hab){
    let cubre = false;
    let area = 0;
    for (let i = 0; i< recortes.length; i = i+2){
        area = area + recortes[i]*recortes[i+1];
    }
    if (area == hab){
        cubre = true;
    }
    return cubre;
}

let losrecortes = [2,4,1,3,5,6];
let areahab = 41;
alert(cubreONo(losrecortes, areahab));