function mostrarCondiciones(num, num1) {
    let resultado = '';
    let maximo = 0;
    let minimo = 0;
    let aux = 0;
    if(num > num1){
        aux = num;
        num = num1;
        num1 = aux;
    } 
    
    for (let i = num; i <= num1; i++) {

        if (esMultiplo3(i)) {
            resultado += `${i} es multiplo de 3\n`;
        }
        if (esMultiplo5(i)) {
            resultado += `${i} es multiplo de 5\n`;
        }
        if (esPrimo(i) === 'si') {
            resultado += `${i} es primo\n`;
        }
    }
    return resultado;
}

function esPrimo(numero) {
    let txt = 'si';
    if (numero < 2) {
        txt = 'no';
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            txt = `no`;
            break;
        }
    }
    return txt;
}

function esMultiplo3(numero) {
    if (numero % 3 == 0) {
        return true;
    } else {
        return false;
    }
}
function esMultiplo5(numero) {
    if (numero % 5 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado = mostrarCondiciones(20,5);
console.log(resultado);
