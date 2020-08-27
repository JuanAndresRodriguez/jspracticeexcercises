/*
Inicializar un objeto en forma literal para contener información de una 
receta de cocina para empanadas. 
Debe tener titulo (string), porciones (número) e ingredientes (array de string).

Utilizando console.log mostrar la información de la receta de una por línea:

empanadas caseras

porciones:2

Ingredientes:

harina

agua

carne
*/

var receta = {
    titulo: 'empanadas caseras',
    porciones: 2,
    ingredientes: ['harina', 'agua', 'carne']
};

console.log(receta.titulo);
console.log(receta.porciones);
for(let i = 0; i < receta.ingredientes.length; i++){
    console.log(receta.ingredientes[i]);
}