"use strict"

//001 - Usando JavaScript, selecciona el enlace (<a>) y verifica si tiene el atributo target. Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo target no está presente".

//Accedo a la etiqueta <a>
let enlace=document.querySelector('a');
//Usando la variable compruebo con la propiedad hasAttribute si el elemento tiene el atributo pedido, en caso de que exista imprime su valor sino imprime un mensaje
if(enlace.hasAttribute('target')){
    console.log("El valor del atributo es:" + enlace.getAttribute('target'));
}else{
    console.log("El atributo target no está presente");
}


//002 - Usando JavaScript, selecciona el primer elemento li dentro de la lista y verifica si tiene el atributo data-tipo. 
//Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo data-tipo no está presente".

//Accedo a la lista
let lista=document.querySelector('ul li');
//Usando la variable compruebo con la propiedad hasAttribute si el elemento tiene el atributo pedido, en caso de que exista imprime su valor sino imprime un mensaje
if(lista.hasAttribute('data-tipo')){
    console.log('El valor del atributo es:' + lista.getAttribute('data-tipo'));
}else{
    console.log('El atributo data-tipo no está presente');
}


//003 - Usando JavaScript, selecciona el párrafo con clase parrafo y cambia su atributo data-tipo a "nuevo-parrafo". Luego, imprime en la consola el nuevo valor del atributo.

//Accedo al parrafo con la clase mencionada
let parrafo=document.querySelector('.parrafo');
//Compruebo si realemnte el parrafo tiene el atributo que es necesario cambiar
if(parrafo.hasAttribute('data-tipo')){
//En caso de que exista el atributo, usando el método setAttribute, establezo el atributo que quiero modificar y su nuevo valor
    parrafo.setAttribute('data-tipo' , 'nuevo-parrafo')
//Imprimo por consola el valor del nuevo atributo
    console.log("El valor del nuevo atributo es:" + parrafo.getAttribute('data-tipo'));
}else{
    console.log('El atributo no está presente');
}


//004 - Usando JavaScript, selecciona el título (<h1>) y agrega un nuevo atributo llamado style con el valor color: blue;.

//Accedo al titulo
let titulo=document.querySelector('h1')
//Si el título existe realmente, con el método setAttribute, establezco el nuevo atributo que voy a agregar y su valor correspondiente, luego muestro un mensaje para saber si no hay errores
if(titulo){
    titulo.setAttribute('style', 'blue');
    console.log('Se agregó el atributo');
}else{
    console.log('No se agregó el título');
}

//005 - Usando JavaScript, selecciona el primer elemento li y elimina su atributo data-tipo. Luego, imprime en la consola la lista de atributos restantes.

//
lista.removeAttribute('data-tipo');
console.log('La lista de atributos restantes es: ' ,lista.attributes)