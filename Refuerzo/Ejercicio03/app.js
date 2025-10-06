//! FALTA DESCODIFICAR
//* Objeto donde almaceno el abc morse
const morse = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----."
};

function codificadorMorse(cadena) {
    let cadenaAMorse = '';
    let cadenaALetra = '';
    //* Paso la cadena a mayuscula, la recorro y por cada letra busco su equivalente en morse, luego formateo la salida en funcion de si hay espacio entre palabras o 
    //* entre caracteres
    let cadenaMayuscula = cadena.toUpperCase();
   //! ESTO SI QUE FUNCIONA POR QUE EL OBJETO ES PARA CODIFICAR A MORSE
    for (let i = 0; i < cadenaMayuscula.length + 1; i++) {
        
        let letra = cadenaMayuscula[i];
        let amorse = morse[letra];
        
        if(amorse == undefined){
            cadenaAMorse += ' ';
        } else {
            cadenaAMorse += `${amorse} `;
        }
    }

    //! ESTO NO FUNCIONA POR QUE AL INTENTAR ACCEDER A MORSE[LETRAMORSE], ACCEDE A LA CLAVE NO AL VALOR, POR LO QUE DA UNDEFINED
    let resultado = '';
    cadenaAMorse = cadena;
    let palabras = cadenaAMorse.split('  ');
    palabras.forEach(palabra => {
    let letras = palabra.split(' ');
    letras.forEach(letraMorse => {
        console.log(letraMorse);
        resultado += morse[letraMorse];
    });
    resultado += ' '; //
});
return resultado;
        
    }


let resultado = codificadorMorse('.--. ..- - ---  -- --- .-. ... .');
console.log(resultado);
