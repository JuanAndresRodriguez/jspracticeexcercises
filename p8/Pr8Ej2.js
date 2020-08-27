/*
Escribir un  programa que muestre el día actual y la hora 
en el siguiente formato:

Día Actual: Domingo Hora: 10:45

Nota: investigar Date, getDay(), getHours(), getMinutes()
*/

function diaYHoraActual(){
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let hoy = new Date();
    let minutos = hoy.getMinutes();

    if(minutos < 10){
        minutos = "0" + min;
    }

    let ret = "Dia actual "+dias[hoy.getDay()]+" Hora "+hoy.getHours()+":"+ minutos
    return ret;
}

alert(diaYHoraActual());