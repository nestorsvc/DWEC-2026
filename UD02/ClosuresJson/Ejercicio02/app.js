
$yedra = (function () {
    let alumnos = [
        {
            nombre: "Laura García",
            nota: 8.5,
            modulo: "DWEC",
            convocatorias: 2
        },
        {
            nombre: "Carlos Pérez",
            nota: 6.2,
            modulo: "DWES",
            convocatorias: 1
        },
        {
            nombre: "Marta López",
            nota: 9.1,
            modulo: "DWEC",
            convocatorias: 3
        },
        {
            nombre: "Javier Ruiz",
            nota: 4.8,
            modulo: "DWES",
            convocatorias: 2
        },
        {
            nombre: "Sara Gómez",
            nota: 7.0,
            modulo: "DWEC",
            convocatorias: 1
        },
        {
            nombre: "David Martín",
            nota: 3.9,
            modulo: "DWES",
            convocatorias: 4
        }
    ];
    /**
     * Devolver un json con los alumnos que han suspendido. 
     * Creo un objeto vació y dentro voy a añadir solamente los alumnos que hayan suspendido
     * */

    function alumnosSuspensos() {
        let listaSuspenos = [];
        for (let i in alumnos) {
            if (alumnos[i].nota < 5) {
                let alumnoAprobado = {};
                alumnoAprobado = { nombre: alumnos[i].nombre, nota: alumnos[i].nota, modulo: alumnos[i].modulo };
                listaSuspenos.push(alumnoAprobado);
            }
        }
        // a < b = a va antes que b, devuelvo -1 
        // a > b = b va antes que a, devuelvo 1
        // 0 significaria que a y b son iguales segun el criterio de orden 
        listaSuspenos.sort(function (a, b) {
            if (a.nombre < b.nombre) {
                return -1;
            } if (a.nombre > b.nombre) {
                return 1;
            }
            return 0;
        });

        return listaSuspenos;
    }

    /**
     * Devolver un array JSON con:
     * modulo, nota MEDIA y convocatorias MEDIA por modulo
     * Creamos un array de objetos donde agrupemos:
     * modulos, notas, convocatorias y CANTIDAD de alumnos por modulo
     * Con ese objeto creado lo recorremos para calcular la nota media y las convocatorias medias
     */

    function estadisticasModulo() {
        let resultado = [];
        let alumnosDWES = 0;
        let alumnosDWEC = 0;

        let moduloDWEC = {};
        let moduloDWES = {};

        let notaMediaDWEC = 0;
        let sumaNotasDWEC = 0;

        let convocatoriaMediaDWEC = 0;
        let sumaConvocatoriasDWEC = 0;

        let notaMediaDWES = 0;
        let sumaNotasDWES = 0;

        let convocatoriaMediaDWES = 0;
        let sumaConvocatoriasDWES = 0;

        for (let i in alumnos) {
            if (alumnos[i].modulo === "DWES") {
                alumnosDWES++;
                sumaNotasDWES += alumnos[i].nota;
                sumaConvocatoriasDWES += alumnos[i].convocatorias;
            } else {
                alumnosDWEC++;
                sumaNotasDWEC += alumnos[i].nota;
                sumaConvocatoriasDWEC += alumnos[i].convocatorias;
            }
        }

        notaMediaDWES = sumaNotasDWES / alumnosDWES;
        convocatoriaMediaDWES = sumaConvocatoriasDWES / alumnosDWES;

        notaMediaDWEC = sumaNotasDWEC / alumnosDWEC;
        convocatoriaMediaDWEC = sumaConvocatoriasDWEC / alumnosDWEC;

        moduloDWES = { modulo: "DWES", notaMedia: notaMediaDWES.toFixed(2), convocatoriaMedia: convocatoriaMediaDWES.toFixed(2), alumnos: alumnosDWES };
        moduloDWEC = { modulo: "DWEC", notaMedia: notaMediaDWEC.toFixed(2), convocatoriaMedia: convocatoriaMediaDWEC.toFixed(2), alumnos: alumnosDWEC };


        resultado.push(moduloDWEC, moduloDWES);
        resultado.sort((a, b) => b.convocatoriaMedia - a.convocatoriaMedia);
        return resultado;

    }

    /**
     * Con stringify devuelvo el array JSON en una cadena de texto
     */
    function parsearJSON() {
        return JSON.stringify(alumnos);
    }
    
    /**
     * Le paso una cadena como parámetro a la función,
     * dentro del try catch paso la cadena a json y comrpuebo si es un array u objeto válido,
     * si lo es puedo usarlo como nuevo array JSON, si no salta el catch
     */
    function cargarCadenaJSON(cadena){
        let mensaje = '';
        try {
            let datosNuevos = JSON.parse(cadena);
            if(Array.isArray(datosNuevos)){
                alumnos = datosNuevos;
            }
            mensaje = "Cadena parseada correctamente";
        } catch (error) {
            mensaje = "La cadena no es un JSON válido";
        }
        return mensaje;
    }
    
    return {
        alumnosSuspensos,
        estadisticasModulo,
        parsearJSON,
        cargarCadenaJSON
    };
})();

let resultado = $yedra.cargarCadenaJSON();
console.log(resultado);
