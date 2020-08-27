/*
Crear la clase CuentaBancaria, que tiene nombre y saldo. 
Tiene también un método depositar y de impresión. 
Crear 3 cuentas para ejemplificar su uso, incluyendo depósitos.
*/

class CuentaBancaria{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    depositar(monto){
        this.saldo += monto;
    }
    toString(){
        return "Cuenta de "+this.nombre+ " $ "+this.saldo;
    }
}

let cuenta1 = new CuentaBancaria("Ana", 1000);
let cuenta2 = new CuentaBancaria("Luis", 500);
let cuenta3 = new CuentaBancaria("Pedro", 800);

alert(cuenta1);
alert(cuenta2);
alert(cuenta3);

cuenta1.depositar(500);

alert(cuenta1);