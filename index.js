const btnAceptar = document.getElementById('btnAceptar');
const aceptarDatosCheckbox = document.getElementById('aceptarDatos');

btnAceptar.addEventListener('click', () => {
    if (aceptarDatosCheckbox.checked) {
        const aceptaDatos = aceptarDatosCheckbox.checked;

        if (aceptaDatos == true) {
                alert('Su aceptación de datos ha sido registrada correctamente.');
            } else {
                alert('Error al registrar su aceptación de datos.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('Error en la comunicación con el servidor.');
        });
    } else {
        alert('Debe aceptar la política de tratamiento de datos para continuar.');
    }
});
