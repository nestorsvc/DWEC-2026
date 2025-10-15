const colores = ['amarillo', 'azul', 'rojo', 'verde'];

let $simon = (function () {

    let arrayColoresCadaRonda = [];
    let posicionActual = 0;
    let rondaActual = 0;
    let estado = '';
    let racha = 0;
    let mejorRacha = 0;

    function agregarColor() {
        let color = Math.floor(Math.random() * colores.length);
        arrayColoresCadaRonda.push(colores[color]);
        rondaActual = arrayColoresCadaRonda.length;
        return arrayColoresCadaRonda;
    }

    function iniciarJuego() {
        arrayColoresCadaRonda.length = 0;
        rondaActual = 0;
        estado = 'jugando';
        let nuevaSecuencia = agregarColor();
        return nuevaSecuencia;
    }

    function comprobarUltimoColor(colorPulsado) {
        racha = 0;
        if (estado === 'parado') {
            return;
        }
        let txt = '';

        if (colorPulsado === arrayColoresCadaRonda[posicionActual]) {
            posicionActual++;
            txt = 'acierto';

            if (posicionActual === arrayColoresCadaRonda.length) { //Ronda superada
                racha++;
                agregarColor();
                posicionActual = 0;
                txt = 'rondaSuperada';
            }
        } else {
            if (racha > mejorRacha) {
                mejorRacha = racha;
            }
            txt = 'fallo';
            estado = 'parado';
        }
        return {
            resultado: txt,
            aciertos: posicionActual,
            racha: racha,
            mejorRacha: mejorRacha,
            total: arrayColoresCadaRonda.length
        };
    }

    function comprobarEstado() {
        return estado;
    }
    function obtenerPosicionActual() {
        return posicionActual;
    }
    function obtenerMejorRacha() {
        return mejorRacha;
    }


    return {
        agregarColor: agregarColor,
        iniciarJuego: iniciarJuego,
        comprobarUltimoColor: comprobarUltimoColor,
        comprobarEstado: comprobarEstado,
        obtenerPosicionActual: obtenerPosicionActual,
        obtenerMejorRacha: obtenerMejorRacha
    }
}());

window.addEventListener("load", () => {

    function apagarTodosLosBotones() {
        console.log("Apagando todos los botones");
    }
    function iluminarBoton(color) {
        console.log("Iluminando " + color);

    }

    let tiempoDeIluminacion = 500;
    let tiempoEntreEncendidos = 300;

    function mostrarSecuencia(secuencia) {
        let mostrandoSecuencia = true;

        let tiempoAcumulado = 0;

        secuencia.forEach(color => {
            setTimeout(() => {
                apagarTodosLosBotones();
                iluminarBoton(color);
            }, tiempoAcumulado);

            tiempoAcumulado = tiempoDeIluminacion + tiempoEntreEncendidos;
        });
        setTimeout(() => {
            mostrandoSecuencia = false;
            console.log('secuencia terminada');

        }, tiempoAcumulado);
    }

    function arrancarJuego() {
        if ($simon.comprobarEstado() === 'jugando') {
            return;
        }

        let secuencia = $simon.iniciarJuego();
        mostrarSecuencia(secuencia);
    }

    // Evento cuando el jugador pulsa un botón:
    function botonPulsado(color) {
        let resultado = $simon.comprobarUltimoColor(color);

        if (resultado.resultado === "rondaSuperada") {
            let secuencia = $simon.generarSecuencia();
            mostrarSecuencia(secuencia);
        } else if (resultado.resultado === "fallo") {
            console.log("Fin de la partida");
        }
    }
})