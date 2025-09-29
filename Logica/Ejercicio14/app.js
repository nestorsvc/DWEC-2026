/**
 ** Creamos el array de objetos alumnos, con el valor asignatura que es otro objeto con valores "modulo" y "nota"
 */
let alumnos = [
  {
    nombre: "Nestor",
    asignaturas: [
      { modulo: "DWEC", nota: 7 },
      { modulo: "DIW", nota: 5 },
      { modulo: "DWES", nota: 8 },
      { modulo: "DAW", nota: 0 }
    ]
  },
  {
    nombre: "Rodrigo",
    asignaturas: [
      { modulo: "DWEC", nota: 9 },
      { modulo: "DIW", nota: 8 },
      { modulo: "DWES", nota: 7 },
      { modulo: "DAW", nota: 6 }
    ]
  },
  {
    nombre: "Angel",
    asignaturas: [
      { modulo: "DWEC", nota: 4 },
      { modulo: "DIW", nota: 3 },
      { modulo: "DWES", nota: 5 },
      { modulo: "DAW", nota: 2 }
    ]
  }
];

function datosAlumnos(alumnos){
    let resultado = '';
    for (let i of alumnos){
        resultado+= 'Nombre:\n'
       for (let j of i.asignaturas){
            resultado+= `${i.nombre} -> Modulo: ${j.modulo} Nota: ${j.nota}\n`;
        }
    }
    return resultado;
}
let resultado = datosAlumnos(alumnos);
console.log(resultado);


