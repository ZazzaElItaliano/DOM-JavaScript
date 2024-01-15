"use strict";

// Declaración de la variable que contendrá el área de edición
let areaEdicion = null;

// Obtener la referencia al elemento div con id 'vista'
let vista = document.getElementById('vista');

// Agregar un manejador de eventos al hacer clic en el div
vista.onclick = function () {
    // Iniciar el modo de edición
    iniciarEdicion();
};

// Función para iniciar el modo de edición
function iniciarEdicion() {
    // Crear un elemento textarea para la edición
    areaEdicion = document.createElement('textarea');
    areaEdicion.className = 'edit';
    areaEdicion.value = vista.innerHTML;

    // Agregar un manejador de eventos para la tecla Enter
    areaEdicion.addEventListener('keydown', function (evento) {
        if (evento.key === 'Enter') {
            this.blur();
        }
    });

    // Agregar un manejador de eventos para perder el foco (blur)
    areaEdicion.addEventListener('blur', function () {
        // Finalizar el modo de edición
        finalizarEdicion();
    });

    // Reemplazar el div con el área de edición y enfocar el área
    vista.replaceWith(areaEdicion);
    areaEdicion.focus();
}

// Función para finalizar el modo de edición
function finalizarEdicion() {
    // Actualizar el contenido del div con el valor del área de edición
    vista.innerHTML = areaEdicion.value;

    // Reemplazar el área de edición con el div
    areaEdicion.replaceWith(vista);
}
