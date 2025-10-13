    function marcoFrases(frase){
        let palabras = [];
        let indice = 0;
        let palabra = '';
        let palabraActual = '';
        for (let i = 0; i < frase.length; i++){
        if(frase[i] !== ' '){
            palabraActual+= frase[i];
        } else {
            palabra = palabraActual;
            palabras[indice] = palabraActual;
            palabraActual = '';
            indice++;
        }
    }

    if(palabraActual!==''){
        palabras[indice] = palabraActual;
    }
    indice = 0;
    let resultado = '';
     for (let i = 0; i <= frase.length; i++){
        for (let j = 0; j <= frase.length; j++){
            if (j == 0 || i == 0 || j == frase.length - 1 || i == frase.length - 1){
                resultado+= '*';
            } else {
                resultado+= palabras[indice];
                indice++;
            }
        }
        resultado+='\n';
    }
    return resultado;       
    }
    let resultado = marcoFrases('hola que tal');
    console.log(resultado);
