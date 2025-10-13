function juegoMates() {
    let contadorAcierto = 0;
    let contadorIncorrecto = 0;
    let contadorPreguntas = 4;
    let continuar = '';
    let resumen = [];
    let pregunta = '';
    do {
        while (contadorPreguntas > 0) {
            let num = Math.floor(Math.random() * 10) + 1;
            let num1 = Math.floor(Math.random() * 10) + 1;
            let operadores = ['+', '-', ':', 'x'];
            let indice = Math.floor(Math.random() * operadores.length);
            let operador = operadores[indice];
            let respuestaUsuario = prompt(`Resuelve las siguientes operaciones:\n ${num} ${operador} ${num1} = `);
            pregunta = `\nPregunta:\n${num} ${operador} ${num1} = ${respuestaUsuario} -->`;
            let respuestaMaquina = 0;
            if (operador == '+') {
                respuestaMaquina = num + num1;
            } else if (operador == 'x') {
                respuestaMaquina = num * num1;
            } else if (operador == '-') {
                respuestaMaquina = num - num1;
            } else if (operador == ':') {
                respuestaMaquina = num / num1;
            }
            if (respuestaUsuario == respuestaMaquina) {
                contadorAcierto++;
                pregunta += ' Acertada';
                alert('Correcto');
            } else {
                contadorIncorrecto++;
                pregunta += ' Fallada';
                alert('Incorrecto');
            }
            contadorPreguntas--;
            resumen.push(pregunta);
        }
        continuar = confirm('¿Desea seguir jugando?');
        contadorPreguntas = 4;
    } while (continuar);
    let txtResumen = 'RESUMEN DEL JUEGO';
    for (let i = 0; i < resumen.length; i++) {
        txtResumen += resumen[i] + '\n';
    }
    txtResumen += `\nOperaciones correctas: ${contadorAcierto}\nOperaciones incorrectas: ${contadorIncorrecto}`;
    alert(txtResumen);
}
let resultado = juegoMates();
console.log(resultado);

