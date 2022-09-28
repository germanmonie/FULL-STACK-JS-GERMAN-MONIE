/*3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar. */

let hora;
let nombreEmpleado;
let antigüedad;
let cantidadHorasAlMes;
let atributoAntiguedad = 30;
let bonusAntiguedad;
let sueldo;

hora = prompt("Ingrese valor de la hora");
nombreEmpleado = prompt("Ingrese nombre del empleado");
antigüedad=prompt("Ingrese la cantidad de años de antiguedad del empleado");
cantidadHorasAlMes=prompt("Ingrese la cantidad de horas trabajadas en el mes");

if (antigüedad <= 10){
  sueldo= hora*cantidadHorasAlMes
  alert(`El empleado ${nombreEmpleado} tiene una antiguedad de ${antigüedad} años y debe cobrar ${sueldo}`);
}else{
  bonusAntiguedad = antigüedad * atributoAntiguedad;
 sueldo = hora * cantidadHorasAlMes + bonusAntiguedad;
  alert(`El empleado ${nombreEmpleado} tiene una antiguedad de ${antigüedad} años y debe cobrar ${sueldo}`);
}
