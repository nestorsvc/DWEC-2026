document.addEventListener("DOMContentLoaded",function(){
//Escribe una función que reciba un importe en euros y devuelva en un array el importe
// introducido como parámetro repartido en billetes de 200, 100, 50, 10, 5 y monedas de 2 y
// 1 euros. La devolución empleara siempre la moneda de mayor valor disponible.
// Para probarlo crea una web que incluya los campos de entrada “Importe producto”,
// “Importe entregado” un botón para “Cobrar”. Y como elementos de salida un contenedor
// para el “importe total a devolver” y otro contenedor “cambio” en el que se muestre la
// devolución resultado de la llamada a la función, formatea la salida para mostrar cada
// valor devuelto en una línea nueva. 

let btnCobrar = document.getElementById('btnCobrar');
let importe = document.getElementById('importeEntregado');

btnCobrar.addEventListener("click",()=>{

});
function maquinaCambio(importeProducto, importeEntregado){
    let contador200 = 0;
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5  = 0;
    let contador2 = 0;
    let contador1 = 0;
    let cambio = importeEntregado - importeProducto;
    let arrEntregado = [];
    let aux = 0;
    if (cambio > 0){
        if(cambio % 200 == 0){
            arrEntregado[arrEntregado.length] = ++contador200;
            aux = cambio / 200;
            cambio-=aux;
        } else if(cambio % 100 == 0){
            arrEntregado[arrEntregado.length] = ++contador100;
        } else if (cambio % 50 == 0){
            arrEntregado[arrEntregado.length] = ++contador50;
        } else if(cambio % 10 == 0){
            arrEntregado[arrEntregado.length] = ++contador10;
        } else if( cambio % 5 == 0){
            arrEntregado[arrEntregado.length] = ++contador5;
        }else if( cambio % 2 == 0){
            arrEntregado[arrEntregado.length] = ++contador2;
        }else if( cambio % 1 == 0){
            arrEntregado[arrEntregado.length] = ++contador1;
        }
    }
}

});