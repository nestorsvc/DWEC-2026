function trianguloRectangulo() {
  let n = 5;
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    resultado += "*";
    console.log(resultado);
  }
}
//* Con esta versión se puede omitir un for
// function trianguloIsosceles() {
//   let n = 5;
//   let resultado = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n + i; j++) {
//       if (j < n - i - 1) {
//         resultado += " ";
//       } else {
//         resultado += "*";
//       }
//     }
//     resultado += "\n";
//   }
//   console.log(resultado);
// }

//* Con esta versión, el primer for es solamente para recorrer cada linea,
//* con el segundo añadimos los espacios que necesitamos con n - i - 1
//* y el tercer for es para añadir los asteriscos con 2 * 1 + 1
//* al final usamos un salto de linea para que no salga todo junto
function trianguloIsosceles() {
  let n = 5;
  let resultado = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      resultado += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  console.log(resultado);
}

//* Es exactamente igual que el triangulo isosceles, pero lo que cambia es que en el segudo triangulo, 
//* la i empieza en n - 2 para que no se repita la linea del medio, y termina cuando es mayor o igual a 0
function rombo() {
  let n = 10;
  let primerTriangulo = "";
  let segundoTriangulo = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      primerTriangulo += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      primerTriangulo += "*";
    }
    primerTriangulo += "\n";
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n - i - 1; j++) {
      segundoTriangulo += " ";
    }
    for (let x = 0; x < 2 * i + 1; x++) {
      segundoTriangulo += "*";
    }
    segundoTriangulo += "\n";
  }
  console.log(segundoTriangulo);
}

// console.log(primerTriangulo+=segundoTriangulo);


// trianguloRectangulo();
// trianguloIsosceles();
rombo();