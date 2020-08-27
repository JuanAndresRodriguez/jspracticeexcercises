/*
Implementar la siguiente función en JS: function ocultoMail(email)

Recibe un email válido y lo oculta, mantiene los primeros 5 caracteres y luego “...”. Si tiene menos de 5, lo deja igual.

Ejemplo: recibe “anamaria@gmail.com”, retorna “anama…@gmail.com”
*/

function ocultoMail(email){
    let arroba = email.indexOf("@");
    let emailrec = email.substring(0,arroba);
    let resto = email.substring(arroba);
    if(emailrec.length > 5){
        emailrec = emailrec.substring(0,5)+"..."    
    }
    return emailrec+resto;
}

let elemail = String(prompt('Ingrese email'));
alert(ocultoMail(elemail));