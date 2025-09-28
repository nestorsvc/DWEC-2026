function juegoNumeroSecreto() {
    let numeroSuperSecreto = Math.floor((Math.random()) * 100) + 1;
    let contadorIntentos = 5;
    while (contadorIntentos > 0){
        let numeroUsuario = prompt('Intenta adivinar el número');
        if(numeroUsuario == numeroSuperSecreto){
            alert('¡Enhorabuena jefe, acertaste!');
            break;
        }
        if (numeroUsuario > numeroSuperSecreto){
            alert(`Numero incorrecto, el número secreto está por debajo del introducido\n${--contadorIntentos == 1 ? `¡Último intento!` : `Te quedan ${contadorIntentos} intentos`}`);
        } else {
            alert(`Numero incorrecto, el número secreto está por encima del introducido\n${--contadorIntentos == 1 ? `¡Último intento!` : `Te quedan ${contadorIntentos} intentos`}`);
        }
    }
    alert(`El numero super secreto era el ${numeroSuperSecreto}`);
}

let resultado = juegoNumeroSecreto();
console.log(resultado);
