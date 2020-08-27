/*
Dado el siguiente código
*/

var compra = {  
  banana: "80.25",
  manzana: "13.99",
  peras: "12.55",
  duraznos: "23.60",
  leche: "31.34",
  yogur: "22.36"
};

alert(totalCompra(compra));

/*
Escribir la función totalCompra que retorna el monto total de la compra
*/

function totalCompra(lista){
    let total = 0;
    for(let item in lista){
        total += Number.parseFloat(lista[item]);

    }
    return total;
}