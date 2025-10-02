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
    let cadenaMayuscula = cadena.toUpperCase();
    for (let i = 0; i < cadenaMayuscula.length + 1; i++) {
        
        let letra = cadenaMayuscula[i];

        let amorse = morse[letra];

        if(amorse == undefined){
            cadenaAMorse+= ' ';
        } else {
            cadenaAMorse += `${amorse} `;
        }
    }
    return cadenaAMorse;
}

let resultado = codificadorMorse('puto morse');
console.log(resultado);
