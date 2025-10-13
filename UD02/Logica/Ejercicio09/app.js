//* Primero usamos el operador rest (...) para recoger los argumentos en una variable (argumentos)
function agruparParametros(...argumentos) {
    /**
     ** Declaramos un array para cada una de las colecciones, y un contador que le asignaremos a cada una para ir agregando
     ** el valor de argumentos en la posición de i, al array correspondiente en la posición del contador
     *? Ejemplo:
     *? booleanos[0] = argumentos[i] --> booleanos[0] = el primer booleano que encuentre; se actualiza el contador de j (j++)
     *? booleanos[1] = argumentos[i] --> booleanos[0] = el segundo booleano que encuentre; se actualiza el contador de j (j++)
     *? se concatena con el resultadoBooleanos+=, y luego se suman todos los resultados a resultado
     */
    let resultado = '';
    let resultadoCadenas = '';
    let resultadoNumeros = '';
    let resultadoBoleanos = '';
    let cadenas = [];
    let booleanos = [];
    let numeros = [];
    let j = 0;
    let x = 0;
    let k = 0;
    for (let i = 0; i <= argumentos.length - 1; i++) {
        if (typeof (argumentos[i]) == 'boolean') {

            booleanos[j] = argumentos[i];
            resultadoBoleanos += `"${booleanos[j]}" || Posicion--> ${i + 1} --> Tipo: Boolean\n`;
            // resultado += `"${booleanos[j]}" || Posicion--> ${i + 1} --> Tipo: Boolean\n`;
            j++;
            // console.log(booleanos[i]);

            // if (booleanos.length >= 1) {
            //     resultado += `"${booleanos[i]}" || Posicion--> ${i + 1} --> Tipo: Boolean\n`;
            // }
        } else if (typeof (argumentos[i]) == 'string') {
            cadenas[x] = argumentos[i];
            resultadoCadenas+= `"${cadenas[x]}" || Posicion--> ${i + 1} --> Tipo: Cadena\n`;
            // resultado += `"${cadenas[x]}" || Posicion--> ${i + 1} --> Tipo: Cadena\n`;
            x++;

            // if (cadenas.length >= 1) {
            //     resultado += `"${cadenas[i]}" || Posicion--> ${i + 1} --> Tipo: Cadena\n`;
            // }
            // console.log(cadenas[i]);
        } else if (typeof (argumentos[i]) == 'number') {
            numeros[k] = argumentos[i];
            resultadoNumeros+= `"${numeros[k]}" || Posicion--> ${i + 1} --> Tipo: Numero\n`;
            // resultado += `"${numeros[k]}" || Posicion--> ${i + 1} --> Tipo: Numero\n`;
            k++;

            //  if (numeros.length >= 1) {
            //     resultado += `"${numeros[i]}" || Posicion--> ${i + 1} --> Tipo: Numero\n`;
            // }
            // console.log(numeros[i]);
        }
        
    }
    resultado = resultadoCadenas + resultadoBoleanos + resultadoNumeros;
    return resultado;
}
let resultado = agruparParametros('nestor', true, 20, 'serna', false,'vamos',false);
console.log(resultado);
