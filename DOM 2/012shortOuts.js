"use strict";

// Definir una función llamada ejecutarConTeclas que toma una función (funcion) y un número variable de códigos de tecla (codigos).
function ejecutarConTeclas(funcion, ...codigos) {
    // Crear un conjunto (Set) para almacenar las teclas que están actualmente presionadas.
    let teclasPresionadas = new Set();

    // Agregar un event listener para el evento 'keydown' (cuando una tecla es presionada).
    document.addEventListener('keydown', function(evento) {
        // Añadir el código de la tecla presionada al conjunto de teclas presionadas.
        teclasPresionadas.add(evento.code);

        // Verificar si todas las teclas especificadas están en el conjunto de teclas presionadas.
        if (codigos.every(codigo => teclasPresionadas.has(codigo))) {
            // Todas las teclas están presionadas, ejecutar la función proporcionada.
            funcion();

          
            teclasPresionadas.clear();
        }
    });

    // Agregar un event listener para el evento 'keyup' (cuando una tecla es liberada).
    document.addEventListener('keyup', function(evento) {
        // Eliminar el código de la tecla liberada del conjunto de teclas presionadas.
        teclasPresionadas.delete(evento.code);
    });
}

// Llamar a la función ejecutarConTeclas proporcionando una función de alerta y dos códigos de tecla ('KeyQ' y 'KeyW').
ejecutarConTeclas(
    () => alert("¡Hola!"),
    "KeyQ",
    "KeyW"
);

