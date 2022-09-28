/*2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa.*/

let contraseña;
let reingresoContraseña;
let intentos = 2;
let j = 2;
let aviso = "Por su seguridad reingrese su contraseña";
let correcto = "Felicitaciones,recordás tu contraseña";
let incorrecto = "Tenes que ejercitar la memoria";

contraseña = prompt("Ingrese una contraseña");

if (contraseña != "") {
  alert(aviso);
  reingresoContraseña = prompt("Reingrese su contraseña usted tiene 3 intentosGer");
  if (reingresoContraseña != contraseña) {
    for (i = 1; i <= intentos; i++) {
      reingresoContraseña = prompt(
        `Error reingrese su contraseña, cantidad de intentos restantes ${j}`
      );
      j--;
      if (reingresoContraseña == contraseña) {
        alert(correcto);
        break;
      }
      if (i == intentos) {
        alert(incorrecto);
      }
    }
  } else {
    alert(correcto);
  }
} else {
  alert("Contrseña invalida");

}
