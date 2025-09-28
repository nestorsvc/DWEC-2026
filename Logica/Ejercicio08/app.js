function factorial(numero){
    let resultado = '';
    let factorial = 1;
    //* Lo que hago es inicializar el factorial a 1 fuera del bucle y dentro del for por cada vuelta, se va guardando el resultado acumulado en cada iteracion
    //* que se multiplica a i, que va bajando de 5 a 1 para hacer el factorial correctamente.
    //? Ejemplo de ejecución: 
    //? Factorial = 1 * 5 --> Factorial = 5,
    //? Factorial = 5 * 4 --> Factorial = 20, 
    for (let i = numero; i >= 1; i--){
        factorial = factorial * i;
        resultado+= `${i == 1 ? `${i}=${factorial}` : `${i}x`}`;
    }
    console.log(factorial);
    return resultado;
}
let resultado = factorial(5);
console.log(resultado);
