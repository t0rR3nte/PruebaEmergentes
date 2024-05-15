const AWS = require('aws-sdk');

const btnAceptar = document.getElementById('btnAceptar');
const aceptarDatosCheckbox = document.getElementById('aceptarDatos');

btnAceptar.addEventListener('click', () => {
    if (aceptarDatosCheckbox.checked) {
        alert('Su aceptación de datos ha sido registrada correctamente.');
    } else {
        alert('Debe aceptar la política de tratamiento de datos para continuar.');
    }
});
