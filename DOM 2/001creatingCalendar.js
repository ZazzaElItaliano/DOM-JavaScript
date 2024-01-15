"use strict";

// Obtener el elemento con el id "calendario" del documento HTML
let elemento = document.getElementById("calendario");

// Función principal para crear el calendario
function createCalendar(elem, year, month) {
  // Ajustar el mes al formato de JavaScript ya que los meses empieza a contar desde 0 no desde 1
  let mes = month - 1;

  // Crear un objeto Date para el primer día del mes
  let fecha = new Date(year, mes);

 //Iniciar la tabla y gaurdarla en una variable
  let tabla = '<table><tr><th>LUN</th><th>MAR</th><th>MIER</th><th>JUE</th><th>VI</th><th>SA</th><th>DO</th></tr><tr>';

  // Inicializar el contador para los días del mes
  let diaActual = 1;

  // Llenar las celdas vacías al principio del mes
  for (let i = 0; i < obtenerNumeroDia(fecha); i++) {
    tabla += '<td></td>';
  }

  // Iterar mientras el mes de la fecha sea igual al mes deseado
  while (fecha.getMonth() == mes) {
    // Meter el número del día en la tabla
    tabla += '<td>' + diaActual + '</td>';
    diaActual++;

    // Verificar si es el último día de la semana  para pasar a la siguiente fila
    if (obtenerNumeroDia(fecha) % 7 == 6) {
      tabla += '</tr><tr>';
    }

    // Avanzar al siguiente día
    fecha.setDate(fecha.getDate() + 1);
  }

  // Completar la última fila con celdas vacías si es necesario
  if (obtenerNumeroDia(fecha) !== 0) {
    for (let i = obtenerNumeroDia(fecha); i < 7; i++) {
      tabla += '<td></td>';
    }
  }

 
  tabla += '</tr></table>';

  // Meter dentro del div con id contenedor la tabla con el calendario
  elem.innerHTML = tabla;
}

// Función para obtener el número de día (0 a 6, donde 0 es lunes y 6 es domingo)
function obtenerNumeroDia(date) {
  let dia = date.getDay();
  // Si es domingo (0), asignar 7 para que sea el último día de la semana
  if (dia === 0) dia = 7;
  return dia - 1;
}


createCalendar(elemento, 2022, 12);

