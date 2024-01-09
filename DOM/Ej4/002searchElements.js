"use strict"

//¿Cómo encontrar?…

//La tabla con id="age-table".
let edadTabla = document.getElementById('age-table');

//Todos los elementos label dentro de la tabla (debería haber 3)
let elementoLabel = edadTabla.getElementsByTagName('label');
//El primer td en la tabla (con la palabra “age”).
let primerTD = edadTabla.querySelector('td:first-child');
//El form con name="search".
let buscarForm = document.forms['search'];
//El primer input en ese formulario.
let primerInput = buscarForm.querySelector('input');
//El último input en ese formulario. 
let buscarInput = buscarForm.querySelectorAll('input');
let ultimoInput = buscarInput [ultimoInput.length - 1];
