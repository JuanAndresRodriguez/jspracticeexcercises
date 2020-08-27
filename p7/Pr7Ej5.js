/*
Implementar la siguiente función en JS: function primerNoRepetido(frase)

Recibe una frase y retorna el primer carácter que no tiene repetidos. 
Ejemplo: recibe: “abacddbec” , retorna “e”. Si no hay ninguno, retorna “NINGUNO”.
*/

function primerNoRepetido(frase){
   let termine = false;
   let primera="NINGUNO";
   for (let i = 0; i < frase.length && !termine; i++){
       let letra = frase.charAt(i);
       let veces= 0;
    
       for (let j = 0; j < frase.length ; j++ ){
           let letra2 = frase.charAt(j);
           if (letra=== letra2){
               veces++;
           }
       }
       if (veces==1){
           termine = true;
           primera = letra;
       }
   }
   return primera;

}

var lafrase = String(prompt('Ingrese Frase'));
alert(primerNoRepetido(lafrase));