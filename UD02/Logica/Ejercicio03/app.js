'use strict';

// function cuadradoRectangulo(){
//     let n = parseInt(prompt('Introduce la altura del rectangulo:'));
//     let cuadrado = [];
//     for (let i = 0; i <= n-1; i++){
//         cuadrado[i] = '';                
//         for (let j = 0; j <= n - 1; j++){
//             if(i == 0|| i == n-1 || j == 0 || j == n-1){
//                 cuadrado[i] += '*';
//             }else{
//                 cuadrado[i] += ' ';
//             }
//         }
//     }
//     return cuadrado;
// }



function dibujarRectangulo(base, altura){
    let resultado = '';

    for (let i = 0; i <= altura - 1; i++){
        for (let j = 0; j <= base - 1; j++){
            if (j == 0 || i == 0 || j == base - 1 || i == altura - 1){
                resultado+= '*';
            } else {
                resultado+= ' ';
            }
        }
        resultado+='\n';
    }
    return resultado;
}
let resultado = dibujarRectangulo(5,8);
console.log(resultado);

