
class Casa {

	constructor(laDireccion){
		this.direccion=laDireccion;
		this.listaGastos = [];
	}

	agregarGasto(unGasto){
		this.listaGastos.push(unGasto);
	}

	darGastos(){
		return this.listaGastos;
	}

	hayGastos(){
		return this.listaGastos.length>0;
	}

	toString(){
		return this.laDireccion;
	}

	calcularPromedio(){
		let retorno = "- no se puede calcular";
		if (this.hayGastos()){
			let suma = 0;
			for(let i = 0; i < this.darGastos().length; i++){
				let miGasto = this.darGastos()[i];
				suma += miGasto.monto;
			}
			retorno = suma/miCasa.darGastos().length;
		}
		return retorno;
	}

	calcularMayor(){
		let retorno ="Sin datos";
		if(this.hayGastos()){
			let max = 0;
			let posMax = 0;
			for (let i = 0; i < this.darGastos().length; i++){
				let miGasto = this.darGastos()[i];
				if (miGasto.monto > max){
					max = miGasto.monto;
					posMax = i;
				}
			}
			retorno = this.darGastos()[posMax];
		}
		return retorno;
	}

	ordenar(ordenadoCrec){
		if(ordenadoCrec){
			// ordena creciente
			this.darGastos().sort(function(primero, segundo){
				return primero.monto-segundo.monto;
			});
		}else{
			// en forma decreciente utilizando arrow function
			this.darGastos().sort((primero, segundo)=>{
				return segundo.monto-priero.monto;
			});
		}
		return this.darGastos();
	}

	totalPorDia(){
		let totales = [];
		for (let i = 0; i<31; i++){
			totales[i]=0;
		}
		for (let i = 0; i < this.darGastos().length; i++){
			let dia = this.darGastos()[i].dia;
			let monto = this.darGastos()[i].monto;

			totales[dia-1]+=monto;
		}
		return totales;
	}
};


class Gasto {

	constructor(elDia, laDescripcion, elMonto){
		this.dia=elDia;
		this.descripcion = laDescripcion;
		this.monto = elMonto;
	}

	toString(){
		return "Gasto del "+this.dia+" ("+this.descripcion+") por $ "+this.monto;
	}
};