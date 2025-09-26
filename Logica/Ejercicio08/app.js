function factorial(numero){
    let resultado = '';
    let x;
    for (let i = numero; i >= 1; i-- ){
        x = numero === 1 ? '=' : 'x='
       resultado+= `${i}`+numero;
    }
    return resultado;
}
let resultado = factorial(5);
console.log(resultado);
