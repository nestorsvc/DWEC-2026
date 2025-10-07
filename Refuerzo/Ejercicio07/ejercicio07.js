console.log('holsada');

function conjuntos (arr, arr1, operacion){
    console.log('gajsoipfjsaojidoi');
    
    let arrInterseccion = [];
    let arrUnion = [];
    let arrDiferencia = [];
    let operacionMinuscula = operacion.toLowerCase();
    if (operacionMinuscula == 'union'){
       for (let i = 0; i < arr.length ; i++){
        
        if(arr[i] !== arr1[i]){
            arrUnion[i] = i;
        }
       }
    }

    if(operacionMinuscula == 'interseccion'){

    }

    if(operacionMinuscula == 'diferencia'){

    }
    return arrUnion;
}
let arr = [1,2,3]
let arr1 = [2,3,4]
let resultado = conjuntos(arr,arr1,'union');
console.log(resultado);
