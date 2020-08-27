/*
Crear un array de objetos, donde cada objeto corresponde a un auto. 
Cada auto tiene chapa (string), marca (string) y la indicación de si tiene 
paga la patente o no. Incluir 2 autos. Utilizar la forma literal.

Recorrer el array y por cada auto indicar marca, chapa y “al día” o “atrasado” 
según tenga paga la patente o no.
*/

var autos = [
    {
        chapa: 'SBE 2020',
        marca: 'Fiat',
        paga: false
},
    {
        chapa: 'SAA 2019',
        marca: 'Toyota',
        paga: true

}];

for (let i = 0; i < autos.length; i++){
    let auto = autos[i];
    let datos = auto.chapa + ' de la marca ' + auto.marca;
    if(auto.paga){
        console.log(datos + ' al dia');
    } else {
        console.log(datos + ' atrasado');
    }
}