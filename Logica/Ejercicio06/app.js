function generarFigura(nombreFuncion, tamanio){
    alert( );

}

function generarCuadrado(tamanio){
    let resultado = '';
    for (let i = 0; i <= tamanio - 1; i++){
        for (let j = 0; j <= tamanio - 1; j++){
            if(i == 0 || i == tamanio - 1 || j == 0 || j == tamanio - 1){
                resultado+= '*';
            }else{
            resultado+=' ';
        }
    }
    resultado+='\n';
}
return resultado;
}
function generarTriangulo(tamanio){
    let resultado = '';
    for (let i = 0; i < tamanio; i++){
        for(let j = 0; j < tamanio - i - 1; j++){
            resultado+= ' ';
        }
        for(let x = 0; x < 2 * i + 1; x++){
            resultado+= '*';
        }
        resultado+='\n';
    }
    console.log(resultado);
};
function generarRombo(tamanio){
    let resultado = '';
    for (let i = 0; i < tamanio; i++){
        for(let j = 0; j < tamanio - i - 1; j++){
            resultado+= ' ';
        }
        for (let x = 0; x < 2 * i + 1; x++){
            resultado+='*';
        }
        resultado+='\n';
    }
    console.log(resultado);
};
let opcion = prompt(`Menu de opciones para generar figuras(seleccione)\nOpciones dentro del sistema\n1.Cuadrado Hueco\n2.Triangulo Isosceles\n3.Rombo`);
switch(opcion){
    case 1:let tamanio=parseint(prompt('erigay?')); generarFigura(generarCuadrado(tamanio));
    break;

}