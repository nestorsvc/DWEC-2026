function anagramas(cadena, cadena1) {
    let txt = '';
    if (cadena == cadena1) {
        txt = `Dos palabras iguales no pueden ser anagramas`;
    }
    
    let contadorCadena = {};
    let contadorCadena1 = {};

    //* Creo dos objetos donde voy guradando cada letra y el numero de veces que sale
    for (let i = 0; i <= cadena.length - 1; i++) {
        if(contadorCadena[cadena[i]] == undefined){
            contadorCadena[cadena[i]] = 1;
        } else {
            contadorCadena[cadena[i]] += 1;
        }
    }
    for (let i = 0; i <= cadena1.length - 1; i++) {
        if(contadorCadena1[cadena1[i]] == undefined){
            contadorCadena1[cadena1[i]] = 1;
        } else {
            contadorCadena1[cadena1[i]] += 1;
        }
    }
    
    //* Recorro los objetos con for in, primero comrpuebo si la letra existe en la segunda cadena, luego compruebo si el numero de veces que sale es el mismo que en la segunda cadena
    //* (esto se puede hacer debido a que ambos objetos estan ordenados alfabeticamente)
    for (i in contadorCadena){
        if(!contadorCadena1[i]){
        txt = `${cadena} y ${cadena1} NO son anagramas`;
        } else if(contadorCadena1[i] !== contadorCadena[i]) {
        txt = `${cadena} y ${cadena1} NO son anagramas`;
        } else {
            txt = `${cadena} y ${cadena1} son anagramas`;
        }
    }
    return txt;
}

let funcion = anagramas('frio', 'oifr');
console.log(funcion);

//? MODIFICAR FOR IN ANAGRAMAS