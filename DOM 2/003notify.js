"use strict"

function showNotification(options) {
    // Crear un elemento div para la notificación
    const notification = document.createElement('div');

    // Configurar el contenido HTML de la notificación
    notification.innerHTML = options.html || '';

    // Agregar la clase 'notification' por defecto
    notification.classList.add('notification');

    // Agregar la clase adicional si se proporciona en las opciones
    if (options.className) {
        notification.classList.add(options.className);
    }

   
    // Agregar la notificación al cuerpo del documento
    document.body.appendChild(notification);

    // Desaparecer automáticamente después de 1.5 segundos
    setTimeout(() => {
        notification.remove();
    }, 1500);
}

// Ejemplo de uso
showNotification({
  
    html: 'GIOVANNI VAZQUEZ JV',
    className: 'welcome'
});
