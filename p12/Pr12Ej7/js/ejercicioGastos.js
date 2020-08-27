window.addEventListener("load", inicio);

let miCasa = new Casa("Avda 18 de Julio 1234");

function inicio(){
	document.getElementById("botonAgregar").addEventListener("click", agregarGasto);
	document.getElementById("botonConsultar").addEventListener("click", mostrarTabla);
	document.getElementById("crec").addEventListener("change", mostrarTabla);
	document.getElementById("decrec").addEventListener("change", mostrarTabla);
	document.getElementById("botonMayor").addEventListener("click", mostrarMayor);
	document.getElementById("botonPromedio").addEventListener("click", mostrarPromedio);
	document.getElementById("botonDiario").addEventListener("click", mostrarPorDia);
}

function agregarGasto(){
	let miForm = document.getElementById("formAgregar");
	let dia = parseInt(document.getElementById("dia").value);
	let descripcion = document.getElementById("descripcion").value;
	let monto = parseInt(document.getElementById("monto").value);

	if(!miForm.reportValidity()){
		alert("Dia o monto incorrectos");
	} else {
		let unGasto = new Gasto(dia, descripcion, monto);
		miCasa.agregarGasto(unGasto);
		alert("Agregado!");
		limpiarPantalla();
	}
}

function limpiarPantalla(){
	let tabla = document.getElementById("tablaG");
	tabla.innerHTML+"";
	let may = document.getElementById("gastoMayor");
	may.innerHTML="";
	let prom = document.getElementById("gastoPromedio");
	prom.innerHTML ="";
	let porDia = document.getElementById("gastosDiarios");
	porDia.innerHTML ="";
	
	let formM = document.getElementById("formAgregar");
	formM.reset();
}

function mostrarTabla(){
	let tabla = document.getElementById("tablaG");
	let ordenadoCrec = document.getElementById("crec").checked;
	let listaMostrar = miCasa.ordenar(ordenadoCrec);
	tabla.innerHTML = "";
	if (listaMostrar.length==0){
		tabla.innerHTML ="Sin datos";}
	else {
		
		let header = tabla.createTHead();
		let row = header.insertRow(0);
		let cellD = row.insertCell();
		cellD.innerHTML = "Dia";
		let cellDe = row.insertCell();
		cellDe.innerHTML = "Descripcion";
		let cellM = row.insertCell();
		cellM.innerHTML = "Monto";
			
		for (let i = 0; i < listaMostrar.length; i++){
			let fila = tabla.insertRow();
			let gasto = listaMostrar[i];
			for (let k in gasto){
				let celda = fila.insertCell();
				celda.innerHTML= gasto[k];
			}
		}
	}
	
}


function mostrarMayor(){
	let gastoM = miCasa.calcularMayor();
	let may = document.getElementById("gastoMayor");
	may.innerHTML =gastoM;
}

function mostrarPromedio(){
	let prom = miCasa.calcularPromedio();
	let promC = document.getElementById("gastoPromedio");
	promC.innerHTML ="El promedio de gastos fue "+ prom;
}



function mostrarPorDia(){
	let diario = miCasa.totalPorDia();
	let listaP = document.getElementById("gastosDiarios");
listaP.innerHTML="";

        for (let i=0; i < diario.length;i++){
	      let li=document.createElement('li');
	      li.innerHTML= (i+1) + " - " + diario[i];
	      listaP.appendChild(li);
        }
}