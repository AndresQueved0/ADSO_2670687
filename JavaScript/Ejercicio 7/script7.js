/*EJERCICIO 5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/

let distancia= prompt("Escriba la distancia recorrida en: ")
let tiempo= prompt("Escriba el tiempo que duro el recorrido")
let tarifakm=15000
let tarifamin=2000
let recorrido= parseInt(distancia*tarifakm);
let hora= parseInt(tiempo*tarifamin);
let valor= parseInt(recorrido)+parseInt(hora);
alert("El valor de la carrera es: $"+valor+" PESOS");