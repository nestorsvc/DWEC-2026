function dibujarEscalera (numero){
    let resultado = '';
    if(numero > 0){
        let casoCero = '-';
        for (let i = 0; i < numero; i++){
            for (let j = 0; j < numero - i; j++){
                resultado+= ' ';
            }
            for (let x = 0; x < i + 1 ; x++){
                resultado+= '_|';
            }
            resultado+= '\n';
        }
        console.log(resultado);
    }
    if (numero < 0){

    }
    if(numero == 0){
        resultado = '--';
    }
}

let pruebaDibujarEscalera = dibujarEscalera(4);
console.log(pruebaDibujarEscalera);
