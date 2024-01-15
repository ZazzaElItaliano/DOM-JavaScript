"use strict"

//Obtener el id del botón
let ocultar = document.getElementById('ocultar');

//Añadimos un evento para cuando se haga click en el botón
ocultar.addEventListener('click', function () {
    // Cuando se pulsa el boton le asignamos la propiedad none para que se oculte 
    ocultar.style.display = 'none';
});