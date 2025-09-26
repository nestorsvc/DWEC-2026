function generarFigura(nombreFuncion, tamanio) {
  alert(nombreFuncion(tamanio));
}

function generarCuadrado(tamanio) {
  let resultado = "";
  for (let i = 0; i <= tamanio - 1; i++) {
    for (let j = 0; j <= tamanio - 1; j++) {
      if (i == 0 || i == tamanio - 1 || j == 0 || j == tamanio - 1) {
        resultado += "*";
      } else {
        resultado += " ";
      }
    }
    resultado += "\n";
  }
  return resultado;
}
function generarTriangulo(tamanio) {
  let resultado = "";
  for (let i = 0; i < tamanio; i++) {
    for (let j = 0; j < tamanio - i - 1; j++) {
      resultado += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  return resultado;
}
function generarRombo(tamanio) {
  let resultado = "";
  for (let i = 0; i < tamanio; i++) {
    for (let j = 0; j < tamanio - i - 1; j++) {
      resultado += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  for (let i = tamanio - 2; i >= 0; i--) {
    for (let j = 0; j < tamanio - i - 1; j++) {
      resultado += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  return resultado;
}
let seguir = "";
do {
  let figura = parseInt(prompt(`Menu de opciones para generar figuras(seleccione)\nOpciones dentro del sistema\n1.Cuadrado Hueco\n2.Triangulo Isosceles\n3.Rombo`));
  let tamanio = parseInt(prompt("Introduce el tamaño de la figura"));
  switch (figura) {
    case 1:
      generarFigura(generarCuadrado, tamanio);
      break;
    case 2:
      generarFigura(generarTriangulo, tamanio);
      break;
    case 3:
      generarFigura(generarRombo, tamanio);
      break;
  }
  seguir = confirm("¿Desea continuar?");
} while (seguir == true);
