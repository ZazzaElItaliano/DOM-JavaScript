"use strict"


//001 Usando JavaScript, agrega una nueva fila a la tabla con los siguientes datos: "Pedro", "28", "Colombia".

let fila=miTabla.insertRow();
let celdaNombre=fila.insertCell(0);
celdaNombre.innerHTML='Pedro';
let celdaEdad=fila.insertCell(1);
celdaEdad.innerHTML='28';
let celdaPais=fila.insertCell(2);
celdaPais.innerHTML='Colombia';

//002- Cambia el nombre de "Carlos" a "Juan" y actualiza su edad a "26".
//Accedo a la fila donde almaceno los datos de "Carlos"
let cambiarNombre=miTabla.rows[1];
//Usando la variable anterior accedo a las celdas donde se almacenan nombre y edad y les asigno un nuevo valor
cambiarNombre.cells[0].innerHTML='Juan';
cambiarNombre.cells[1].innerHTML='26';




//003 - Selecciona y muestra en la consola el nombre de la persona que tiene la edad más alta en la tabla.

//Selecciono la tabla con la que quiero interactuar
let tabla=document.getElementById('miTabla');
//Creo dos variaboes para guardar nombre y edad
let nombre='';
let edad=0;
//Creo un bucle for para ir recorriendo fila a fila (empezando desde la segunda) y comparar edades
for(let i=1; i<tabla.rows.length; i++){

//accedemos a la celda edad de la tabla y para que la comparación de edades se haga satisfactoriamente, usamos parseint para convertir el valor de esa celda a un entero
let edadTabla=parseInt(tabla.rows[i].cells[1].innerHTML);
//Verificamos si la edad obtenida en la tabla es mayor a la almacenada en la variable edad, en ese caso sobreescribimos la variable edad para almacennar el nuevo valor más alto
if(edadTabla>edad){
edad=edadTabla;
//Guardamos en la variable nombre, el nombre de la persona cuya edad sea mayor a la edad que estamos comparando
nombre = tabla.rows[i].cells[0].innerHTML;

}


}
console.log('La persona mas mayor es: '+nombre);

//004 -Agrega una nueva columna al final de cada fila con el texto "Acción" y dentro de cada celda de esta columna agrega un botón con el texto "Eliminar".

function eliminarFila(button) {
    let fila = button.parentNode.parentNode; // Obtiene la fila actual
    fila.parentNode.removeChild(fila); // Elimina la fila
}