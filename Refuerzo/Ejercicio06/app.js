let matriz = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
function comprobarEstado(matriz) {
    //*Comprobar filas
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][0] != " " && matriz[i][0] == matriz[i][1] && matriz[i][1] == matriz[i][2]) {
            return matriz[i][0];
        }
    }
    //*Comprobar columnas
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[0][j] != " " && matriz[0][j] == matriz[1][j] && matriz[1][j] == matriz[2][j]) {
            return matriz[0][j];
        }
    }

    //*Comprobar diagonales
    if (matriz[0][0] != " " && matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2]) {
        return matriz[0][0];
    }
    if (matriz[0][2] != " " && matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0]) {
        return matriz[0][2];
    }

    //*Comprobamos los huecos vacios

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] == " ") {
                return " ";
            }
        }
    }

    return 'empate';
}

function ponerHumano(matriz, x, y, ficha) {
    if (matriz[x][y] == " ") {
        matriz[x][y] = ficha;
    } else {
        alert('Posicion ya ocupada');
    }
    if (comprobarEstado(matriz) == 'x') {
        return true;
    }
    comprobarEstado(matriz);
    return dibujarTablero(matriz);
}
function ponerMaquina(matriz, ficha) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == " ") {
                let temp = matriz[i][j];
                matriz[i][j] = ficha;
                let estado = comprobarEstado(matriz);
                if (estado != " " && estado != 'empate') {
                    matriz[i][j] = ficha;
                    return;
                }
                matriz[i][j] = temp;
                matriz[i][j] = "x";
                if (comprobarEstado(matriz) == 'x') {
                    matriz[i][j] = ficha;
                    return;
                }
                matriz[i][j] = temp;
            }
        }
    }
    let x = 0;
    let y = 0;
    do {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);

    } while (matriz[x][y] !== " ")
    matriz[x][y] = ficha;
    return dibujarTablero(matriz);
}
function dibujarTablero(matriz) {
    let tablero = document.getElementById('tablero');
    let html = ``;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            html += `${matriz[i][j]}`;
            if (j < 2) {
                html += '|';
            }
        }
        html += '<br>';
    }
    tablero.innerHTML = html;
    return tablero;
}


console.log(resultado);
