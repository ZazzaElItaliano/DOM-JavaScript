"use strict"

// Obtener referencia al elemento <ul> 
ul.addEventListener('click', function(event) {
    // Verificar si el elemento clicado es un <li> (elemento de lista)
    if (event.target.tagName === 'LI') {
        // Verificar si la tecla Ctrl o la tecla de comando están presionadas
        if (event.ctrlKey || event.metaKey) {
            // Llamar a la función para alternar la selección del elemento
            toggleSelect(event.target);
        } else {
            // Llamar a la función para seleccionar un solo elemento y deseleccionar otros
            singleSelect(event.target);
        }
    }
});



// Función para alternar la clase 'elegido' del elemento <li>
function toggleSelect(li) {
    li.classList.toggle('elegido');
}

// Función para seleccionar un solo elemento y deseleccionar otros elementos
function singleSelect(selectedLi) {
    // Obtener todos los elementos de la lista
    let listItems = ul.getElementsByTagName('li');

    // Iterar sobre todos los elementos de la lista
    for (let li of listItems) {
        // Verificar si el elemento actual es igual al elemento seleccionado
        if (li === selectedLi) {
            // Agregar la clase 'elegido' al elemento clicado
            li.classList.add('elegido');
        } else {
            // Remover la clase 'elegido' de otros elementos
            li.classList.remove('elegido');
        }
    }
}
