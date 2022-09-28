/* 4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número.
5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números */

let numeroRandom;
let numeroUsuario;
let mayor = "El numero elegido por el cpu es mayor al ingresado";
let menor = "El numero elegido por el cpu es menor al ingresado";
let alerta = "Adivine el numero que se encuentra dentro del rango del 0 al 1000";
let numerosIngresados = [];
let numeroMenor;
let numeroMayor;
let cantidadDeNumeros;
let sumaDeNumeros;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
numeroRandom = getRandomInt(1000);
alert(numeroRandom); // hasta aca nuymero rnadom obtenido

do {
  numeroUsuario = prompt(alerta);
  numerosIngresados.push(numeroUsuario);
  if (numeroUsuario == -1) {
    numerosIngresados.pop();
    break;
  }
  if (numeroUsuario < numeroRandom) {
    alert(mayor);
  }
  if (numeroUsuario > numeroRandom) {
    alert(menor);
  }
} while (numeroUsuario != numeroRandom);

if (numeroUsuario == numeroRandom || numeroUsuario == -1) {
  cantidadDeNumeros = numerosIngresados.length ;
  numeroMayor = Math.max(...numerosIngresados);
  numeroMenor = Math.min(...numerosIngresados);
  for (let i = 0; i < numerosIngresados.length; i++) {
    sumaDeNumeros += numerosIngresados[i];
    

   
  }
  //No puedo hacer que sumaDeNumeros me muestre lo pedido.
  if (numeroUsuario == numeroRandom) {
    alert(
      `Felicitaciones, encontraste el numero ${numeroRandom} \n El mayor numero ingresado es el ${numeroMayor}\n El menor numero ingresado es el ${numeroMenor}\n La suma de todos los numeros es de ${sumaDeNumeros}\n La cantidad de numeros ingresados fue de ${cantidadDeNumeros} `
    );
  } else {
  
    alert(
      `No encontraste el numero ${numeroRandom} \n El mayor numero ingresado es el ${numeroMayor}\n El menor numero ingresado es el ${numeroMenor}\n La suma de todos los numeros es de ${sumaDeNumeros}\n La cantidad de numeros ingresados fue de ${cantidadDeNumeros} `
    );
  }
}

