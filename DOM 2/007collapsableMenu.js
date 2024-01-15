"use strict"
//Obtener id y nombre de clase de los elementos
let menu = document.getElementById('menu');
let titulo = document.querySelector('.titulo');
// Asignar un manejador de clic al elemento .titulo
titulo.onclick = function() {
    // Alternar la clase 'open' usando toggle en el elemento menu
  menu.classList.toggle('open');
};