/* EJERCICIO 7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:*/

let monto= prompt("Escribir el monto presupuestal");
let Ginecología= 40/100;
let Pediatría=30/100;
let Traumatología=30/100
let Pginecologia= parseInt(monto*Ginecología);
let Ppediatria= parseInt(monto*Pediatría);
let Ptraumatologia= parseInt(monto*Traumatología);
alert("El presupuesto para Ginecologia es: "+Pginecologia+", El presupuesto para pediatria es: "+Ppediatria+" y el presupuesto de traumatologia es: "+Ptraumatologia);