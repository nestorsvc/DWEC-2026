function factorialRecursivo(numero){
    //* Lo que hace esta funcion es que se va llamando a si misma en cada llamada,
    //* cada llamada se apila hasta llegar al caso base que es numero == 0 y después se desapila 
    //* multiplicando cada resultado con su numero correspondiente
    if(numero == 0){
        return 1;
    }
    let factorial = numero * factorialRecursivo(numero - 1) ;
    return factorial;
}

let resultado = factorialRecursivo(5);
console.log(resultado);
