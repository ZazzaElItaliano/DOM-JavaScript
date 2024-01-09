"use strict"
/* Haz todos los enlaces externos de color "purple" alterando su propiedad style utilizando js.

Un link es externo si:

Su href tiene ://
Pero no comienza con http://internal.com. */

// Selecciono todos los elementos <a>  dentro de <ul>
let links = document.querySelectorAll('ul a');

// recorro cada elemento <a> seleccionado
for (let i = 0; i < links.length; i++) {
   
    //Obtengo el  valor del elemento <a> en cada iteración
    let link = links[i];
    //verifico si se cumplen los requisitos para que un link sea externo que contenga :// y no comience por https internal
    if (link.href.includes('://') && !link.href.startsWith('http://internal.com')) {
    //En caso de que se cumpla la condición altero la propiedad style y cambio el color del enlace a puprura
        link.style.color = 'purple';
    }
}
