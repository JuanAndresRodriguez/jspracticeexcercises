/*
Dado el siguiente código:
*/
var estudiante = { 
    nombre : "Ana Perez", 
    semestre : "2", 
    ingreso : 2018 
};

/*
Incorporar el código necesario para que se muestre por consola los nombres 
de las propiedades (nombre, semestre, ingreso);
*/

for(let propiedad in estudiante){
    console.log(propiedad);
}