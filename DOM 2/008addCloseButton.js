"use strict"

// Obtener todos los elementos con clase 'seccion' y almacenarlos en la variable 'seccion'
let seccion = document.querySelectorAll('.seccion');

// Iterar sobre cada elemento 'seccion' utilizando un bucle for...of
for (let opcion of seccion) {
    // Insertar HTML al comienzo de cada elemento 'seccion'
    opcion.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
}
