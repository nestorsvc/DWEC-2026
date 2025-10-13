function tablaMultiplicar(numero) {
  let txt = `La tabla de ${numero}:`;
  for (let i = 1; i <= 10; i++) {
    txt = `${numero} x ${i} = ${numero * i}`;
    console.log(txt);
  }
}
function tablaMultiplicarRestringida(num, num1) {
  let info = "";
  if (num > 10 || num < 0 || num1 > 10 || num1 < 0) {
    info = "El número no puede ser superior a 10 o inferior a 0";
  } 
  else if (num > num1) {
    for (let i = num1; i <= num; i++) {
      tablaMultiplicar(i);
    }
  } else {
    for (let i = num; i <= num1; i++) {
      tablaMultiplicar(i);
    }
  }
  return info;
}

let resultado = tablaMultiplicarRestringida(2,9);
console.log(resultado);
