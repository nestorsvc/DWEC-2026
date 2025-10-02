function anagramas(cadena, cadena1) {
    let txt = '';
    if (cadena == cadena1) {
        txt = `Dos palabras iguales no pueden ser anagramas`;
    }
    
    let contadorCadena = {};
    let contadorCadena1 = {};
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
    console.log(contadorCadena1);
    console.log(contadorCadena);
    

    let numeroCaracteresCadena = 0;
    let numeroCaracteresCadena1 = 0;

    //* Recorro los objetos con for in 
    for (i in contadorCadena){
        if(){
        txt = `${cadena} y ${cadena1} son anagramas`;
        } else {
        txt = `${cadena} y ${cadena1} NO son anagramas`;
        }
    }
    return txt;
}

let funcion = anagramas('colinas', 'nicolas');
console.log(funcion);

//? MODIFICAR FOR IN ANAGRAMAS