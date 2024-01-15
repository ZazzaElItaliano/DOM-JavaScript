"use strict"

//¿Qué handlers se ejecutan con el click después del siguiente código? ¿Qué alertas se
//muestran?

/*removeEventListener requiere que la función que se proporciona sea la misma función que se utilizó al agregar el evento. En este caso, las funciones proporcionadas son funciones de flecha 
y las funciones de flecha son diferentes cada vez que se crean. 
Por lo tanto, removeEventListener no eliminará la función correctamente.*/

/*Se agrega un manejador de eventos con addEventListener al hacer clic en el botón, 
que muestra una alerta con el texto "1". */
button.addEventListener("click", () => alert("1"));
/*Se intenta eliminar el manejador de eventos agregado con removeEventListener. 
Sin embargo, esto no tiene efecto debido a lo dicho anteriormente de las funciones flecha */
button.removeEventListener("click", () => alert("1"));
/*Se asigna una nueva función de flecha al evento onclick del botón, que muestra una alerta con el texto "2". */
button.onclick = () => alert(2);
/*Después de esto, al hacer clic en el botón, solo se ejecutará la función asignada con onclick, mostrando la alerta "2".
La alerta "1" no se mostrará porque el removeEvent no pudo eliminar el addEvent.





 */