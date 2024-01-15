"use strict"


// Obtener la opción seleccionada actualmente en el elemento <select> con id "genres"
let elegirOpcion = genres.options[genres.selectedIndex];

// Mostrar el valor de la opción seleccionada en un alert
alert(elegirOpcion.value);

// Crear una nueva opción con valor "classic" y etiqueta "Classic"
let nuevaOpcion = new Option("Classic", "classic");

// Agregar la nueva opción al elemento <select> con id "genres"
genres.append(nuevaOpcion);

// Seleccionar la nueva opción recién agregada
nuevaOpcion.selected = true;
