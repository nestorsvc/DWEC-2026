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

function promociona(alumnos){
    let sumaNotas = 0;
    let contadorNotas = 0;
    let media = 0;

    for (let i of alumnos){
      if (i.nombre == 'Angel'){
        for (let j of i.asignaturas){
          if (j.nota < 5){
            i.promociona = false;
          } else {
            i.promociona = true;
          }
          sumaNotas+= j.nota;
          contadorNotas++;
          }
          media = sumaNotas/contadorNotas;
          i.media = media;
        }

        contadorNotas = 0;
        media = 0;
        sumaNotas = 0;

         if (i.nombre == 'Nestor'){
        for (let j of i.asignaturas){
          if (j.nota < 5){
            i.promociona = false;
          } else {
            i.promociona = true;
          }
          sumaNotas+= j.nota;
          contadorNotas++;
          }
          let media = sumaNotas / contadorNotas;
          i.media = media;
        }

        contadorNotas = 0;
        media = 0;
        sumaNotas = 0;

        if (i.nombre == 'Rodrigo'){
        for (let j of i.asignaturas){
          if (j.nota < 5){
            i.promociona = false;
          } else {
            i.promociona = true;
          }
          sumaNotas+= j.nota;
          contadorNotas++;
          }
          let media = sumaNotas / contadorNotas;
          i.media = media;
        }

        contadorNotas = 0;
        media = 0;
        sumaNotas = 0;
      }
      return alumnos;
    }

alumnos = promociona(alumnos);

function alumnoPromociona(alumnos){
    let resultado = '';
    for (i of alumnos){
      if(i.promociona){
        resultado+=`Indice-${i.nombre}-${i.media}`;
      }
    }
    return resultado;
}

function alumnoNoPromociona(alumnos){
    let resultado = '';
    for (i of alumnos){
      if(!i.promociona){
        resultado+=`Indice-${i.nombre}-Pendientes:[`;
        for(j of i.asignaturas){
          if (j.nota < 5){
            resultado+=`${j.modulo},`;
          }
        }
        resultado+=']';
        resultado+='\n';
      }
    }
    return resultado;
}



//* --- Probar --- 
let resultadoPromociona = promociona(alumnos);
let resultadoAlumnoPromociona = alumnoPromociona(alumnos);
let resultadoAlumnoNoPromociona = alumnoNoPromociona(alumnos);
console.log(resultadoPromociona);
console.log(resultadoAlumnoPromociona);
console.log(resultadoAlumnoNoPromociona);


