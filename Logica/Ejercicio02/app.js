let numeros;
let maximo = 0;
let minimo = 0;
let suma = 0;
let media = 0;
let contador = 0;
do {
    numeros = prompt('Introduce numeros:');
    if (minimo < numeros) {
        maximo = numeros;
    } else if (minimo < numeros) {
        minimo = numeros;
    }
    contador++;
    suma += numeros;

    media = suma / contador;
}
while (numeros != 0);


console.log(maximo);
console.log(minimo);
console.log(suma);
console.log(Math.floor(media));
