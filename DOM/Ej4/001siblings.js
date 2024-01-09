"use strict"

//Si elem – es un elemento nodo arbitrario del DOM…

//¿Es cierto que elem.lastChild.nextSibling siempre es null?

/*lastChild devuelve el último hijo del elemento elem. Si ese último hijo es un nodo de texto, comentario o espacio en blanco, entonces nextSibling será null,
pero si el último hijo es un elemento entonces nextSibling será el siguiente nodo de elemento. Así que se podría decir que la afirmación no se cumple siempre*/

/*¿Es cierto que elem.children[0].previousSibling siempre es null ?*/

/*children devuelve los  hijos que son elementos del elemento elem, la expresion elem.children[0] se refiere al primer hijo de elem que es un nodo de elemento.
Mientras que previousSibling devuelve el nodo anterior en el mismo nivel, si no hay nodo anterior, devuelve null. Así que se podría decir que la afirmación es cierta */

let contenedor=document.getElementById('contenedor')
console.log("elem.lastChild.nextSibling:", contenedor.lastChild.nextSibling); 
console.log("elem.children[0].previousSibling:", contenedor.children[0].previousSibling); // Debería ser null