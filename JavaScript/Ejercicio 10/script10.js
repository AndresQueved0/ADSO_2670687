/* EJERCICIO 8 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

let per1=prompt("Escribir cantidad invertida");
let per2=prompt("Escribir cantidad invertida");
let per3=prompt("Escribir cantidad invertida");
let total= parseInt(per1)+parseInt(per2)+parseInt(per3);
let por1=parseInt(per1)/parseInt(total*100);
let por2=parseInt(per2)/parseInt(total*100);
let por3=parseInt(per3)/parseInt(total*100);

alert("El porcentaje de la persona 1 es:"+por1+", el porcentaje de la persona 2 es:"+por2+" y el porcentaje de la persona 3 es:"+por3)