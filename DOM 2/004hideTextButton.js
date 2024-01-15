"use strict"

// identificar el boton y el texto a ocultar
const hideButton = document.getElementById('boton');
const textDiv = document.getElementById('texto');

// Añadimos un evento para hacer desaparecer el texto
hideButton.addEventListener('click', function () {
    // Ocultar el div de texto al hacer clic en el botón
    textDiv.style.display = 'none';
});
