/**
 * Escribe una función que compruebe si los paréntesis, llaves y corchetes de una expresión
   están equilibrados. Es decir, si cada símbolo de apertura se corresponde con un símbolo
   de cierre en orden.
   Correcto: { [ a * ( c + d ) ] - 5 }
   Incorrecto: { a * ( c + d ) ] - 5 }
 */
function expresionesEquilibradas(expresion) {
  let pila = [];
  for (let i = 0; i < expresion.length; i++) {
    switch (expresion[i]) {
      case '{':
        pila.push(expresion[i]);
        break;
      case '[':
        pila.push(expresion[i]);
        break;
      case '(':
        pila.push(expresion[i]);
        break;
      case '}':
        if (pila[pila.length - 1] == '{') {
          pila.pop();
        } else {
          return 'La expresion no es correcta';
        }
        break;
      case ']':
        if (pila[pila.length - 1] == '[') {
          pila.pop();
        } else {
          return 'La expresion no es correcta';
        }
        break;
      case ')':
        if (pila[pila.length - 1] == '(') {
          pila.pop();
        } else {
          return 'La expresion no es correcta';
        }
        break;
    }
  }
  if (pila.length == 0) {
    return 'La expresion es correcta';
  }
}
let resultado = expresionesEquilibradas("{ [ a * ( c + d ) ] - 5 }");
console.log(resultado);

