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
c. 15% de la calificación de un trabajo final.

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
alert("Su calificacion en la materia de algoritmos es: "+ calificacion)*/

/* EJERCICIO 4 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.

let articulo= prompt("Escribir el valor del producto");
let porcentaje=30/100;
let valor= parseInt(articulo*porcentaje);
let ganancia= parseInt(articulo)+ parseInt(valor)
alert("El precio al que debe vender el producto es: "+ganancia)*/

/*EJERCICIO 5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.

let distancia= prompt("Escriba la distancia recorrida en: ")
let tiempo= prompt("Escriba el tiempo que duro el recorrido")
let tarifakm=15000
let tarifamin=2000
let recorrido= parseInt(distancia*tarifakm);
let hora= parseInt(tiempo*tarifamin);
let valor= parseInt(recorrido)+parseInt(hora);
alert("El valor de la carrera es: $"+valor+" PESOS");*/

/*EJERCICIO 6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.

let num1= prompt("Escriba el primer numero");
let num2= prompt("Escriba el segundo numero");
let num3= prompt("Escriba el tercer numero");
let cnum1= parseInt(num1)*parseInt(num1);
let cnum2= parseInt(num2)*parseInt(num2);
let cnum3= parseInt(num3)*parseInt(num3);
alert("El cuadrado del numero "+num1+" es "+cnum1+", el cuadrado del numero "+num2+" es "+cnum2+", el cuadrado del numero "+num3+" es "+cnum3);*/

/* EJERCICIO 7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:

let monto= prompt("Escribir el monto presupuestal");
let Ginecología= 40/100;
let Pediatría=30/100;
let Traumatología=30/100
let Pginecologia= parseInt(monto*Ginecología);
let Ppediatria= parseInt(monto*Pediatría);
let Ptraumatologia= parseInt(monto*Traumatología);
alert("El presupuesto para Ginecologia es: "+Pginecologia+", El presupuesto para pediatria es: "+Ppediatria+" y el presupuesto de traumatologia es: "+Ptraumatologia);*/

/* EJERCICIO 8 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

let per1=prompt("Escribir cantidad invertida");
let per2=prompt("Escribir cantidad invertida");
let per3=prompt("Escribir cantidad invertida");
let total= parseInt(per1)+parseInt(per2)+parseInt(per3);
let por1=parseInt(per1/total)*100;
let por2=parseInt(per2/total)*100;
let por3=parseInt(per3/total)*100;
alert("El porcentaje de la inversion de la persona 1 es: "+por1+", el porcentaje de la inversion de la persona 2 es: "+por2+" y el porcentaje de la persona 3 es: "+por3);

