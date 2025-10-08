document.addEventListener("DOMContentLoaded",function(){

    function conjuntos(arr, arr1, operacion) {
        let arrInterseccion = [];
        let arrUnion = [];
        let arrDiferencia = [];
        let operacionMinuscula = operacion.toLowerCase();
        let resultado = document.getElementById('resultado');
        let mensaje = document.createElement('h3');
        switch (operacion) {
            case 'union':
                //* Recorro el array y solo añado los elementos que no se encuentren en el array
                //* IndexOf devuelve - 1 si no encuentra el valor que se busca
                for (let i = 0; i < arr.length; i++) {
                    if (arrUnion.indexOf(arr[i]) === -1) {
                        arrUnion[arrUnion.length] = arr[i];
                    }
                }
                
                //* La misma jugaga, recorro el segundo array, si existe el valor en arrUnion no lo meto, si existe lo meto
                for (let i = 0; i < arr1.length; i++) {
                    if (arrUnion.indexOf(arr1[i]) === -1) {
                        arrUnion[arrUnion.length] = arr1[i];
                    }
                }
                mensaje.innerHTML = "La union de los conjuntos " + arr + " y " + arr1 + " es: " +arrUnion;
                resultado.append(mensaje);
                return arrUnion;
            case 'interseccion':
                //* Parecido a interseccion pero cambiando algunas cosas, recorro el primer array y solamente añado a arrInterseccion los numeros que 
                //* se encuentran en los dos arrays
    
                for (let i = 0; i < arr.length; i++) {
                    if (arr1.indexOf(arr[i]) !== -1) {
                        arrInterseccion[arrInterseccion.length] = arr[i];
                    }
                }
                mensaje.innerHTML = "La interseccion de los conjuntos " + arr + " y " + arr1 + " es: " +arrInterseccion;
                resultado.append(mensaje);
                return arrInterseccion;
            case 'diferencia':
                //* Primero recorro los dos arrays, y los metos en un objeto donde
                //* si no habian salido nunca, su valor sera 1, si se repite sera 0
                let contadorApariciones = {};
                for (let i = 0; i < arr.length; i++) {
                    if (contadorApariciones[arr[i]] == undefined) {
                        contadorApariciones[arr[i]] = 1;
                    } else {
                        contadorApariciones[arr[i]] -= 1;
                    }
                }
    
                for (let i = 0; i < arr1.length; i++) {
                    if (contadorApariciones[arr1[i]] == undefined) {
                        contadorApariciones[arr1[i]] = 1;
                    } else {
                        contadorApariciones[arr1[i]] = 0;
                    }
                }
    
                //* Separo los arrays de los valores y de las claves del objeto, es decir, los numeros que hay (1,2,3,4) 
                //* y la cantidad de veces que aparecen (1 si solo 1, 2 si se repite)
                let valoresContadorAparciciones = Object.values(contadorApariciones);
                let clavesContadorAparciciones = Object.keys(contadorApariciones);
    
                // console.log(valoresContadorAparciciones);
    
                //* Ahora recorro los valores (si se repite o no), y si no se repite (valor == 1), añado a arrUnion la clave correspondiente, es decir, el numero.
                //* de este modo recorre todo el array y si encuentra (valor = 1) va al array de las claves y coge en el indice (i) el clave (el numero) que corresponde a ese valor
                for (let i = 0; i < valoresContadorAparciciones.length; i++) {
                    if (valoresContadorAparciciones[i] == 1) {
                        arrDiferencia[arrDiferencia.length] = clavesContadorAparciciones[i];
                    }
                }
                mensaje.innerHTML = "La diferencia de los conjuntos " + arr + " y " + arr1 + " es: " +arrDiferencia;
                resultado.append(mensaje);
                return arrDiferencia;
            default:
                return 'Operacion no valida';
        }
    }
    
    let arr = [1, 2, 3]
    let arr1 = [2, 3, 4]
    let resultado = conjuntos(arr, arr1, 'diferencia');
    console.log(resultado);
});





















// let contadorApariciones = {};