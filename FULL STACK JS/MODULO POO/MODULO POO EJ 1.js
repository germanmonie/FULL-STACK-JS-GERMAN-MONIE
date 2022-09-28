const abecedario = "0123456789ABCDEFGHIJKLMNOPRSTUVWXTZabcdefghiklmnoprstuvwxyz"

function generarPassword (length = 8){
    let contrasenia = "";
    for (let i = 0; i<=length; i++){
        contrasenia += abecedario.charAt(Math.floor(Math.random() * abecedario.length));
    }
    return contrasenia;
}
const password = generarPassword(100);
console.log(password);

//Métodos get para los atributos contraseña y longitud.
// Método set para atributo longitud.
set (generarPassword.length){
    this.generarPassword;
    return generarPassword
}

//No pude resolver este ejercicio 


