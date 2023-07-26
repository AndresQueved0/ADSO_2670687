/* EJERCICIO 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra. 

let compra = prompt("Escriba el valor de su compra");
let desc=25/100;
let desval= parseInt(compra*desc);
let nval= parseInt(compra-desval)
alert("El valor total a pagar es: " + nval);*/

/* EJERCICIO 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.

let inversion = prompt("Escriba el valor de su inversion");
let razon= 2/100;
let trazon= parseInt(inversion*razon);
alert("Su ganancia mensual será de: "+trazon);*/

/* EJERCICIO 3 - Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

let nopar1=prompt("Escriba su calificacion");
let nopar2=prompt("Escriba su calificacion");
let nopar3=prompt("Escriba su calificacion");
let notafi=prompt("Escriba la calificacion del examen final")
let notafi=prompt("Escriba la calificacion del trabajo final")
let prom=55/100;
let promexam=30/100;
let promtra=15/100;
let notas= parseInt(nopar1)+parseInt(nopar2)+parseInt(nopar3);
let promedio1= parseInt(notas*prom)
