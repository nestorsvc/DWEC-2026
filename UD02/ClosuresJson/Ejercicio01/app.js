function jugarDados(numeroLados){
    
    // Número aleatorio entre 1 y el número de ladoss
    function numeroAleatorio(){
        let numero = Math.floor(Math.random() * numeroLados) + 1;
        return numero;
    }

    // Devuelvo un array con las dos tiradas
    return function(){
        return [numeroAleatorio(),numeroAleatorio()];
    }
}

/*
Apartado 1:
Solicitamos el numero de tiradas y el numero de lados del dado
*/
let numeroLados = parseInt(prompt('Introduce el número de lados del dado:'));
let numeroTiradas = parseInt(prompt('Introduce el número de tiradas:'));

/*
Aparatado 2:
Instanciamos la closure en una variable, tirarDados();
*/
let tirarDados = jugarDados(numeroLados);

/**
 * Apartado 3:
 * Realizamos la cantiadd de tiradas indicadas con un for
 */
let humano = [];
let maquina = [];

for(let i = 0; i < numeroTiradas; i++){
    let tiradaJugador = tirarDados();
    let tiradaMaquina = tirarDados();

    humano.push((tiradaJugador[0] + tiradaJugador[1]));
    maquina.push((tiradaMaquina[0] + tiradaMaquina[1]));

}

/**
 * Apartado 4:
 * Mostramos cada resultado por ronda, indicando quien ganó y luego hacemos un alert para mostar los resultados
 */
let totalHumano = 0;
let totalMaquina = 0;

let victoriasHumano = 0;
let victoriasMaquina = 0;

for (let i = 0; i < humano.length; i++){
    
    totalHumano = humano[i];
    totalMaquina = maquina[i];
    alert(`Ronda ${i + 1}: Jugador -> ${totalHumano}`);
    alert(`Ronda ${i + 1}: Maquina -> ${totalMaquina}`);

    if(totalHumano > totalMaquina){
        victoriasHumano++;
        alert(`El jugador ganó la ronda ${i + 1}`);
    } else if(totalMaquina > totalHumano){
        victoriasMaquina++;
        alert(`La maquina ganó la ronda ${i + 1}`);
    } else {
        alert('Empate');
    }
}

alert(`${victoriasHumano > victoriasMaquina ? `Ganó el jugador, numero rondas ganadas: ${victoriasHumano}` : `Ganó la máquina, número de rondas ganadas: ${victoriasMaquina}`}`);









