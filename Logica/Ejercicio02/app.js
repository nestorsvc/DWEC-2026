let numeros;
let maximo = -Infinity;
let minimo = Infinity;
let suma = 0;
let media = 0;
let contador = 0;
do {
    numeros = parseInt(prompt('Introduce numeros:'));
    if (numeros != 0){
        if (numeros > maximo) {
            maximo = numeros;
        } 
        if (numeros < minimo) {
            minimo = numeros;
        }
        contador++;
        suma += numeros;
        media = suma / contador;
    }
}
while (numeros != 0);

alert(`-Resumen-\nEl máximo es: ${maximo}\nEl minimo es: ${minimo}\nLa suma es: ${suma}\nLa media es: ${media}`);
