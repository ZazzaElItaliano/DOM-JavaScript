"use strict"


//001-Usando childNodes, selecciona y muestra en la consola todos los nodos hijos del div con id contenedor.

// Selecciona el div con id "contenedor" y luego utiliza childNodes para obtener todos sus nodos hijos. 
//Luego, muestra cada nodo hijo en la consola del navegador. también incluirá nodos de texto, como espacios en blanco entre elementos HTML.

let hijos = contenedor.childNodes;
console.log("Nodos hijos del div con id 'contenedor':");
for (let i = 0; i < hijos.length; i++) {
    console.log(hijos[i]);
}


//002-Usando firstChild, selecciona y muestra en la consola el primer hijo del div con id contenedor.
//Hemos definido la variable contenedor arriba la cual contiene el div con id= contenedor, definimos una variable y le asignamos el contenedor con la propiedad firtschild, 
//luego por consola mostramos el primer hijo del div con id=contenedor
let hijoPrimero=contenedor.firstChild;
console.log("Primer hijo del div con id=contenedor:");
console.log(hijoPrimero);

//003- Usando lastChild, selecciona y muestra en la consola el último hijo del div con id contenedor.
//Aqui hacemos lo mismo que en el anterior apartado pero esta vez usando la propiedad lastchild para buscar el último hijo del div con id=contenedor
let hijoSegundo=contenedor.lastChild;
console.log("último hijo del div con id=contenedor:");
console.log(hijoSegundo);

//004- Usando parentElement, selecciona y muestra en la consola el elemento padre del h1.
//Accedo al elemento en cuestión
let titulo= document.querySelector('h1');
//Con el elemento guardado en una variable, llamo a la variable y uso la propiedad parentElement la cual me dará el elemento padre del h1
let elemento=titulo.parentElement;
console.log("El elemento padre del h1 es:");
console.log(elemento);

//005- Usando children, selecciona y muestra en la consola todos los elementos hijos de la lista desordenada (ul).
//Accedo al elemento ul
let lista=contenedor.querySelector('ul');
// Guardo en una variable con la propiedad childNodes los elementos hijos de la lista
let hijosLista=lista.childNodes;
//Haciendo uso de un buclo recorro todos los elementos hijos para mostrarlos por la consola de forma individual
for(let i=0; i<hijosLista.length; i++){
    console.log(hijosLista[i]);
}

//006- Usando firstElementChild, selecciona y muestra en la consola el primer elemento hijo del div con id contenedor.
//Simplemente usando el id para identificar al div uso la propiedad firstElementChild para mostrar el primer elemento hijo del div
let primerHijo=contenedor.firstElementChild;
console.log(primerHijo);

//007- Usando lastElementChild, selecciona y muestra en la consola el último elemento hijo del div con id contenedor.
//Igual que el apartado anterior pero solo mostrando el ultimo elemento que es hijo del div contenedor
let ultimoHijo=contenedor.lastElementChild;
console.log(ultimoHijo);

//008 -Usando previousElementSibling, selecciona y muestra en la consola el elemento anterior al párrafo con clase parrafo.
//Accedo al elemento <p> mediante el nombre de su clase
let parrafo= document.querySelector(".parrafo");
//Hago uso de la propiedad previousElementSibling para mostrar en la consola el elemento anteriro al parrafo
let elementoAnterior=parrafo.previousElementSibling;
console.log("El elemento anterior al parrafo es:")
console.log(elementoAnterior);

//009 - Usando nextElementSibling, selecciona y muestra en la consola el elemento siguiente al párrafo con clase parrafo.
//Similar al ejercicio anetrior pero mostrando el elemento siguiente al parrafo
let parrafo2= document.querySelector(".parrafo");
let elementoPosterior=parrafo.nextElementSibling;
console.log("El elemento posterior al parrafo es:")
console.log(elementoPosterior);

//010- Usando JavaScript, selecciona el primer elemento li dentro de la lista y muestra en la consola su nodeType, nodeName y tagName.
//Accedo al primer elemento de la lista, accediendo primero a la lista desordenada y luego al primer elemento
let elementosLista=document.querySelector("ul li");
//Hago uso de las distintas propiedades y las muestro por pantalla
console.log('tagName:', elementosLista.tagName);
console.log('nodeName:', elementosLista.nodeName);
console.log('nodeType:', elementosLista.nodeType);

//011- Usando JavaScript, selecciona el enlace (<a>) y muestra en la consola su innerHTML y outerHTML.
//Accedo al elemento a
let enlace=document.querySelector('a');
//Mediante la propiedad innerHTML accedo al contenido dentro de la etiqueta <a>
console.log("El innerHtml es:")
console.log(enlace.innerHTML);
//Mediante la propiedad outerHTML muestro todo lo que contiene la etiqueta <a> desde su inicio hasta su cierre </a>
console.log("El outerHtml es:")
console.log(enlace.outerHTML);


//012 -Usando JavaScript, selecciona el párrafo con clase parrafo y muestra en la consola su nodeValue y textContent.
//Similar al ejercicio 10
console.log('Su nodeValue es:');
console.log(parrafo.nodeValue);
console.log('Su textContent es:');
console.log(parrafo.textContent);

//013- Usando JavaScript, selecciona el div con id contenedor y verifica si tiene el atributo hidden. Si lo tiene, imprime en la consola "El elemento está oculto", de lo contrario, imprime "El elemento no está oculto".
//Con la propiedad hasAttribute compruebo si el div tiene el atributo hidden, en caso de tenerlo muestra un mensaje y sino muestra que no existe tal atributo
if(contenedor.hasAttribute('hidden')){
    console.log('El elemento está oculto');
}else{
    console.log('El elemento no está oculto');
}
 