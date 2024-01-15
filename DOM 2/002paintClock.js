"use strict";

// Declaración de variables 
let temporizadorReloj;
let elementoReloj = document.getElementById('reloj');

// Función para actualizar el contenido del reloj
function actualizarReloj() {
  // Objeto para saber la hora actual
  let tiempoActual = new Date();

  //    Separar en  horas, minutos y segundos
  let horas = tiempoActual.getHours();
  let minutos = tiempoActual.getMinutes();
  let segundos = tiempoActual.getSeconds();

  // Formatear a dos dígitos si es necesario
  horas = formatearDigitos(horas);
  minutos = formatearDigitos(minutos);
  segundos = formatearDigitos(segundos);

  // Actualizar el contenido del reloj en el  HTML
  elementoReloj.children[0].innerHTML = horas;
  elementoReloj.children[1].innerHTML = minutos;
  elementoReloj.children[2].innerHTML = segundos;
}

// Función para iniciar el reloj
function iniciarReloj() {
  // Establecer un nuevo intervalo solo si el reloj está detenido
  if (!temporizadorReloj) {
    temporizadorReloj = setInterval(actualizarReloj, 1000);
  }
  actualizarReloj(); // Iniciar inmediatamente sin esperar 1 segundo hasta el primer intervalo
}

// Función para detener el reloj
function detenerReloj() {
  clearInterval(temporizadorReloj);
  temporizadorReloj = null; // Borrar temporizadorpara indicar que el reloj fue detenido
}

// Función para formatear un valor a dos dígitos
function formatearDigitos(valor) {
  // Asegurarse de que el valor tiene dos dígitos
  if (valor < 10) {
    return '0' + valor;
  } else {
    return valor;
  }
}
