function contadorCaracteres(cadena){
    /**
     ** Definimos el objeto aparicionesCaracteres y simplemente comprobamos si la letra está entro de nuestro objeto, 
     ** si no está la inicializamos con 1, si ya se encuentra dentro de nuestro objeto, se le suma +1 a su "contador"
     */
    let aparicionesCaracteres = {};
    for (let i = 0; i <= cadena.length - 1; i++){
        if(aparicionesCaracteres[cadena[i]] == undefined){
            aparicionesCaracteres[cadena[i]] = 1;
        } else if (aparicionesCaracteres[cadena[i]]){
            aparicionesCaracteres[cadena[i]] += 1;
        }
    }
    return aparicionesCaracteres;
}
let resultado = contadorCaracteres('casa');
console.log(resultado);
