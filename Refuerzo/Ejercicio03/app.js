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
    for (let i = 0; i < cadenaMayuscula.length + 1; i++) {
        
        let letra = cadenaMayuscula[i];
        let amorse = morse[letra];
        
        let codigoMorse = cadena[i];
        
        let aletra = morse[codigoMorse];

        if(amorse == undefined){
            cadenaAMorse += ' ';
            cadenaALetra += ' ';
        } else {
            cadenaAMorse += `${amorse} `;
            cadenaALetra += `${aletra} `;
        }
    }
    return cadenaAMorse;
}

let resultado = codificadorMorse('puto morse');
console.log(resultado);
