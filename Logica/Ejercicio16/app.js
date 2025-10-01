/**
 ** Objeto trabajadores 
 */
let trabajadores = [
    { codigo: "E01", nombre: "Nestor Serna", categoria: 1, contratacion: 2018 },
    { codigo: "E02", nombre: "Manolo Lama", categoria: 2, contratacion: 2020 },
    { codigo: "E03", nombre: "Fito", categoria: 3, contratacion: 2023 }
];

/**
 ** Metodos del objeto 
 */

 const gestionarTrabajadores = (function (){

     //* Función para listar todos los trabajadores, uso foreach=> por que no voy a modificar los datos del objeto, solo a mostrarlos
    function listarTrabajadores(trabajadores) {
        let resultado = '';
        trabajadores.forEach(trabajador => {
            resultado += `${trabajador.nombre}=>\nCategoría: ${trabajador.categoria}\nContratacion: ${trabajador.contratacion}\n`;
    
        });
        return alert(resultado);
    }
    
    //* Funcion para crear el trabajador, pido los datos al usuario y los valido antes de itroducirlos al nuevo objeto trabajador. 
    //* Con concat devuelvo un nuevo array en vez de mutar el que ya tenia.
    function crearTrabajador() {
        let nombre = prompt('Introduce el nombre del nuevo trabajador');
        let categoria = parseInt(prompt('Introduce la categoría del nuevo trabajador'));
        let contratacion = parseInt(prompt('Introduce el año de contratacion del nuevo trabajador'));
    
        //* Mejor forma de sacar el codigo
        let codigo = `E${trabajadores.length + 1 < 9 ? `0${trabajadores.length + 1}` : `${trabajadores.length + 1}`}`;
    
        if (validarNombre(nombre) && validarCategoria(categoria) && validarContratacion(contratacion)) {
           let nuevoTrabajador = { codigo: codigo, nombre: nombre, categoria: categoria, contratacion: contratacion };
           //* Push muta el array, concat devuelve uno nuevo
            trabajadores = trabajadores.concat(nuevoTrabajador);
            return listarTrabajadores(trabajadores);
        } else {
            alert('Has introducido mal uno de los campos');
        }
    
        //* Forma turbia de sacar el codigo
        // for (let i = 0; i <= trabajadores.length + 1; i++){
        //     codigo = `E${i < 9 ? `0${i}` : `${i}`}`;
        // }
    
    }
    
    //* Función para borrar el trabajador, pregunta al usuario confirmación, filtro por el usuario que tiene ese codigo y devuelvo el nuevo array con los datos de los usuarios que 
    //* no tienen el código seleccioado
    function borrarTrabajador(codigo) {
        let confirmacion = confirm('¿Está seguro de que quiere borrar al trabajador?');
        if (confirmacion) {
            let trabajadoresEncontrados = trabajadores.filter(t => t.codigo !== codigo);
            //* Si tienen la misma longitud quiere decir que no ha encotrado el usuario con ese codigo y está devolviendo todos, es decir no existe
            if (trabajadoresEncontrados.length == trabajadores.length) {
                alert('No se ha encontrado al trabajador');
            } else {
                return listarTrabajadores(trabajadoresEncontrados);
            }
        } else {
            alert('Operación cancelada');
        }
        return listarTrabajadores(trabajadores);
    }
    
    //* Función para modificar el trabajador, filtro por código y obtengo el trabajador en cuestión, si se da a cancelar el trabajador no se modifica y se queda con los datos por defecto,
    //* si no se cambian con los nuevos datos (no se puede dejar un campo sin modificar, ya sé que no es lo más eficiente)
    function modificarTrabajador(codigo) {
        let trabajadorEncontrado = trabajadores.filter(t => t.codigo == codigo);
        let valoresActuales = '';
        trabajadorEncontrado.forEach(trabajador => {
            valoresActuales += `Nombre: ${trabajador.nombre}\nCategoría: ${trabajador.categoria}\nContratación: ${trabajador.contratacion}`;
        });
    
        let confirmacion = confirm(`¿Está seguro que quiere modificar el trabajador seleccionado?\nValores por defecto:\n${valoresActuales}`);
        if (confirmacion) {
            let nuevoNombre = prompt('Introduce el nombre para modificar el actual');
            let nuevaCategoria = parseInt(prompt('Introduce la categoria para modificar la actual'));
            let nuevaContratacion = parseInt(prompt('Introduce la contratacion para modificar la actual'));
    
            if (nuevoNombre != null && nuevaCategoria != null && nuevaContratacion != null && validarNombre(nuevoNombre) && validarCategoria(nuevaCategoria) && validarContratacion(nuevaContratacion)) {
                for (i of trabajadorEncontrado) {
                    i.nombre = nuevoNombre;
                    i.categoria = nuevaCategoria;
                    i.contratacion = nuevaContratacion;
                }
                return listarTrabajadores(trabajadorEncontrado);
            } else {
                alert('Debe rellenar todos los campos o ha introducido mal alguno de ellos');
            }
        } else {
            alert('El trabajador no se ha modificado');
            return listarTrabajadores(trabajadorEncontrado);
        }
    }
    
    //* Función para listar nominas, simplemente recorro los trbajadores con for of y saco cada nomina ya calculada
    function listarNominas() {
        let listadoNominas = '--LISTADO DE NOMINAS--\n';
        let importeTotal = 0;
        for (i of trabajadores) {
            console.log(i);
            
            listadoNominas += `Trabajador: ${i.nombre} | Categoría: ${i.categoria} | Nomina Final =  ${calcularBaseAntiguedad(i)}€\n`;
            importeTotal += calcularBaseAntiguedad(i);
        }
        listadoNominas += `Gasto total en nominas: ${importeTotal}€`;
    
        return alert(listadoNominas);
    }
    
    //* Función para calcular la antiguedad, saco los años que lleva en la empresa y lo calculo mediante la base de antiguedad
    function calcularBaseAntiguedad(trabajador) {
        let objetoAnio = new Date();
        let anio = objetoAnio.getFullYear();
        let aniosTrabajados = anio - trabajador.contratacion;
        let nominaTrabajador = 0;
        let antiguedad = 0.04;
    
        switch (trabajador.categoria) {
            case 1:
                nominaTrabajador = 1100 + (1100 * aniosTrabajados * antiguedad);
                break;
            case 2:
                nominaTrabajador = 1400 + (1400 * aniosTrabajados * antiguedad);
                break;
            case 3:
                nominaTrabajador = 1900 + (1900 * aniosTrabajados * antiguedad);
                break;
        }
        return nominaTrabajador;
    }
    
    //* Funcion que sirve de menu, el !isNan(opcion) es por que el prompt con el parseInt al darle a cancelar devuelve NaN, si no devolvería null
    function iniciarApp() {
        let opcion = '';
        do {
            opcion = parseInt(prompt('Menú gestión de empresa: Trabajadores\nSelecciona una opción:\n1. Listar Trabajadores\n2. Crear Trabajador\n3. Borrar Trabajador\n4. Modificar Trabajador\n5. Listar Nóminas'));
            switch (opcion) {
                case 1: listarTrabajadores(trabajadores);
                    break;
                case 2: crearTrabajador()
                    break;
                case 3: borrarTrabajador("E01")
                    break;
                case 4: modificarTrabajador("E03");
                    break;
                case 5: listarNominas();
                    break;
                default:
                    alert('Saliendo...');
                    break;
            }
        } while (!isNaN(opcion));
    }
    
    
    /**
     ** Validaciones
     */
    
    //* Funcion para validar cadena
    function validarNombre(nombre) {
        if (nombre.length < 20) {
            return true;
        } else {
            return false;
        }
    }
    
    //* Función para validar si el número es entero
    function validarCategoria(categoria) {
        if (Number(categoria)) {
            return true;
        } else if (categoria < 1 || categoria > 3) {
            return false;
        }
    }
    
    //* Funcion para validar el año de contratación, pongo además < 1955 por el simple hecho de que la edad sobrepasa el año de jubilacion 
    function validarContratacion(contratacion) {
        let objetoAnio = new Date();
        let anio = objetoAnio.getFullYear()
        if (!Number(contratacion)) {
            return false;
        } else if (contratacion > anio || contratacion < 1955) {
            return false;
        } else {
            return true;
        }
    }
 })();

gestionarTrabajadores();
// let probarValidar = validarNombre('');
// console.log(probarValidar);


// let probarListarTrabajadores = listarTrabajadores(trabajadores);
// let probarCrearTrabajador = crearTrabajador();
// let probarBorrarTrabajador = borrarTrabajador("E01");
// let probarModificarTrabajador = modificarTrabajador("E03");
// let probarListarNominas = listarNominas();

