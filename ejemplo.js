// Variable para almacenar el total acumulado
let totalEstacionamiento = 0;

// Función de inicio de sesión con 3 intentos
function iniciarSesion() {
    const usuarioEsperado = "admin";
    const contrasenaEsperada = "123";
    let intentos = 3;

    while (intentos > 0) {
        let usuario = prompt("Ingrese su usuario:");
        let contrasena = prompt("Ingrese su contraseña:");

        if (usuario === usuarioEsperado && contrasena === contrasenaEsperada) {
            console.log("Inicio de sesión exitoso.");
            return true;
        } else {
            intentos--;
            console.log(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }

    // Si se fallan los 3 intentos, se retorna false y finaliza el programa
    console.log("Inicio de sesión fallido. Fin del programa.");
    return false;
}

// Función para capturar las horas de estacionamiento
function capturarHorasEstacionamiento() {
    let horaEntrada = parseInt(prompt("Ingrese la hora de entrada (0 a 24):"));
    let horaSalida = parseInt(prompt("Ingrese la hora de salida (0 a 24):"));

    let horasEstacionado = horaSalida - horaEntrada;

    // Validación de datos
    if (horasEstacionado < 0 || horaEntrada < 0 || horaSalida < 0 || horaEntrada > 24 || horaSalida > 24) {
        console.log("Horas de entrada o salida inválidas. Intente de nuevo.");
        return capturarHorasEstacionamiento();
    }

    return horasEstacionado;
}

// Función para calcular el costo del estacionamiento
function calcularCostoEstacionamiento(horas) {
    let costo;
    if (horas < 2) {
        costo = horas * 3000;
    } else if (horas <= 5) {
        costo = horas * 2500;
    } else {
        costo = horas * 2000;
    }
    return costo;
}

// Función para mostrar el costo del estacionamiento del vehículo actual
function mostrarTotalEstacionamiento(costo) {
    console.log(`El costo del estacionamiento para este vehículo es: $${costo}`);
}

// Programa principal
if (iniciarSesion()) {
    let continuar = true;

    while (continuar) {
        let horas = capturarHorasEstacionamiento();
        let costo = calcularCostoEstacionamiento(horas);
        mostrarTotalEstacionamiento(costo);
        totalEstacionamiento += costo;

        // Pregunta si desea calcular para otro vehículo
        let respuesta = prompt("¿Desea calcular para otro vehículo? (s/n):");
        continuar = (respuesta.toLowerCase() === 's');
    }

    // Muestra el total acumulado después de calcular varios vehículos
    console.log(`El total acumulado del estacionamiento es: $${totalEstacionamiento}`);
}
