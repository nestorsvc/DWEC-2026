function fibonacci(numero) {
    let sucesion = [];
    //* Inicializamos los dos primeros valores de la serie
    sucesion[0] = 0;
    sucesion[1] = 1;
    //* Luego recorremos desde i = 2 hasta numero, y vamos sumando el anterior + anterior2
    for (let i = 2; i <= numero; i++) {
        sucesion[i] = sucesion[i - 1] + sucesion[i - 2];
    }
    return sucesion;
}
let resultado = fibonacci(10);
console.log(resultado);
