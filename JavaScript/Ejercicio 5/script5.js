/* EJERCICIO 3 - Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

let nopar1=prompt("Escriba su calificacion");
let nopar2=prompt("Escriba su calificacion");
let nopar3=prompt("Escriba su calificacion");
let notafi=prompt("Escriba la calificacion del examen final");
let notata=prompt("Escriba la calificacion del trabajo final");
let prom=55/100;
let promexam=30/100;
let promtra=15/100;
let notas= parseInt(nopar1)+parseInt(nopar2)+parseInt(nopar3);
let promedio1= parseInt(notas*prom);
let promedio2= parseInt(notafi*promexam);
let promedio3= parseInt(notata*promtra);
let promedio= parseInt(promedio1)+parseInt(promedio2)+parseInt(promedio3);
let calificacion= parseInt(promedio/3)
alert("Su calificacion en la materia de algoritmos es: "+ calificacion)