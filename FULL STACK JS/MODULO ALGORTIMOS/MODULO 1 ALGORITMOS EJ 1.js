/*1. Pide un número por teclado e indica si es un número primo o no. Un número primo es
aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
25 es divisible entre 5, sin embargo, 17 si es primo.*/

let numero;
let primo = true;
numero = prompt("ingrese un numero");
for (let i = 2; i<numero / 2; i++){
    if (numero % i === 0){
        primo = false;
    }
}
if(primo){
    console.log("Su numero es primo");
}else{
    console.log("Su numero no es primo");
}