/*
Definir la clase Punto que representa una coordenada en el plano a partir 
de x e y. Definir el constructor y el método sumar, que recibe un punto y 
retorne un nuevo punto a partir de la suma de las respectivas coordenadas.

Probar en la consola:
*/


class Punto {
    constructor(x,y){
        this.x = x, this.y = y
    }
    sumar(otro){
        return new Punto(this.x + otro.x, this.y + otro.y)
    }
}


var p1= new Punto(10,20);
var p2= new Punto(40,50);
var p3= p1.sumar(p2);
console.log(p3);

