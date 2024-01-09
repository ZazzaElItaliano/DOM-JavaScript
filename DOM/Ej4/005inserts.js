"use strict"
/*Tenemos un elemento DOM vacío elem y un string text.

¿Cuáles de estos 3 comandos harán exactamente lo mismo? Pon un ejemplo.

elem.append(document.createTextNode(text))

elem.innerHTML = text

elem.textContent = text */

//Las tres sentencias darán resultados similares, pero se usan de manera diferente 

/*elem.append(document.createTextNode(text)): crea un nuevo nodo de texto con el contenido especificado por la variable text y luego lo agrega como un 
hijo al elemento elem.*/

let elem = document.getElementById('miElemento');
let text = 'Contenido del nodo de texto';
elem.append(document.createTextNode(text));

/*elem.innerHTML = text: establece el contenido HTML del elemento elem. 
Cualquier contenido previo en el elemento será reemplazado por el nuevo contenido de la variable text.  */
let elem1 = document.getElementById('miElemento');
let text1 = '<strong>Contenido HTML</strong>';
elem.innerHTML = text;

/*elem.textContent = text: establece el contenido de texto  del elemento elem. 
el contenido HTML que tenga la variable text se tratará como texto plano y se mostrará como tal. */

let elem2 = document.getElementById('miElemento');
let text2 = 'Contenido de texto plano';
elem.textContent = text;
