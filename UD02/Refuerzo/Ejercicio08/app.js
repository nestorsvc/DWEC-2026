document.addEventListener("DOMContentLoaded", function () {

    let btnCobrar = document.getElementById('btnCobrar');
    let resultado = document.getElementById('resultado');

    btnCobrar.addEventListener("click", () => {
        resultado.innerHTML = ' ';
        let importeEntregado = document.getElementById('importeEntregado').value;
        let importeProducto = document.getElementById('importeProducto').value;
        let cambio = maquinaCambio(importeProducto, importeEntregado);

        let mensaje = document.createElement('p');
        mensaje.innerHTML = cambio;

        resultado.appendChild(mensaje);

    });

    function maquinaCambio(importeProducto, importeEntregado) {

        let contador200 = 0;
        let contador100 = 0;
        let contador50 = 0;
        let contador10 = 0;
        let contador5 = 0;
        let contador2 = 0;
        let contador1 = 0;

        let cambio = importeEntregado - importeProducto;

        let arrEntregado = {};

        while (cambio > 0) {
            if (cambio >= 200) {
                contador200 = parseInt(cambio / 200);
                arrEntregado[200] = contador200;
                cambio -= contador200 * 200;
            } else if (cambio >= 100) {
                contador100 = parseInt(cambio / 100);
                arrEntregado[100] = contador100;
                cambio -= contador100 * 100;
            } else if (cambio >= 50) {
                contador50 = parseInt(cambio / 50);
                arrEntregado[50] = contador50;
                cambio -= contador50 * 50;
            } else if (cambio >= 10) {
                contador10 = parseInt(cambio / 10);
                arrEntregado[10] = contador10;
                cambio -= contador10 * 10;
            } else if (cambio >= 5) {
                contador5 = parseInt(cambio / 5);
                arrEntregado[5] = contador5;
                cambio -= contador5 * 5;
            } else if (cambio >= 2) {
                contador2 = parseInt(cambio / 2);
                arrEntregado[2] = contador2;
                cambio -= contador2 * 2;
            } else if (cambio >= 1) {
                contador1 = parseInt(cambio / 1);
                arrEntregado[1] = contador1;
                cambio -= contador1 * 1;
            }


        }

        let resultado = '';

        for (i in arrEntregado){
            if(i > 2){
                resultado+= `${arrEntregado[i] > 1 ? `${arrEntregado[i]} billetes de ${i}<br>` : `${arrEntregado[i]} billete de ${i}<br>`}`;
            } else {
                resultado+= `${arrEntregado[i] > 1 ? `${arrEntregado[i]} monedas de ${i}<br>` : `${arrEntregado[i]} moneda de ${i}<br>  `}`;
            }
        }
       return resultado;
    }

});