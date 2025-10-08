function conjuntos (arr, arr1, operacion){

    let arrInterseccion = [];
    let arrUnion = [];
    let arrDiferencia = [];
    let operacionMinuscula = operacion.toLowerCase();
    if (operacionMinuscula == 'union'){
        let contadorApariciones = {};
        
       for (let i = 0; i < arr.length ; i++){
        if(contadorApariciones[arr[i]] == undefined){
            contadorApariciones[arr[i]] = 1;
        } else {
            contadorApariciones[arr[i]] -= 1;
        }
       }

       for(i in contadorApariciones){
           if (contadorApariciones[i] !== 0){
               for (let x = 0; x <= arrUnion.length; x++){
                   arrUnion[x] = i;
            }
        }
       }
      console.log(arrUnion);
      
    }
    
    

    if(operacionMinuscula == 'interseccion'){

    }

    if(operacionMinuscula == 'diferencia'){

    }
    // return arrUnion;
}
let arr = [1,2,3,3]
let arr1 = [2,3,4]
let resultado = conjuntos(arr,arr1,'union');
console.log(resultado);
