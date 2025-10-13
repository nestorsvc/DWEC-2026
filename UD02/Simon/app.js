/**
 Todo negocio en autoinvocada incluye devolución de array de estado(colores). 
 *Devuelve también posición actual y devuelve también racha máximo,
 *pulsar botón, estado juego(parado/jugado).Iniciar juego. 
 Boton iniciar juego y los cuatro botones de colores. 
 Boton tiempo para la separación entre colores. 
 */
const colores = ['amarillo','azul','rojo','verde'];

let $simon = (function (){
    
    let rondaActual = 0;
    function juego(){
        let color = Math.floor(Math.random() * colores.length);
        

        
    }
    function pulsarColor(boton){

    }
    function estadoJuego(){

    }
    return juego();
    // return {
    //     juego:juego
    // };

}());

window.addEventListener("load",()=>{

})