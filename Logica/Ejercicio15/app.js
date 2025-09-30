/**
 ** Objeto trabajadores 
 */
let trabajadores = [
    { codigo: "E01", nombre: "Nestor Serna", categoria: 1, contratacion: 2018 },
    { codigo: "E02", nombre: "Manolo Lama", categoria: 2, contratacion: 2020 },
    { codigo: "E03", nombre: "Fito", categoria: 3, contratacion: 2023 }
];

/**
 ** Metodos de del objeto 
 */

function listarTrabajadores(trabajadores) {
    let resultado = '';
    trabajadores.forEach(trabajador => {
        resultado += `${trabajador.nombre}=>\nCategoría: ${trabajador.categoria}\nContratacion: ${trabajador.contratacion}\n`;

    });
    return alert(resultado);
}

function crearTrabajador() {
    let nombre = prompt('Introduce el nombre del nuevo trabajador');
    let categoria = parseInt(prompt('Introduce la categoría del nuevo trabajador'));
    let contratacion = parseInt(prompt('Introduce el año de contratacion del nuevo trabajador'));

    //* forma mejor
    let codigo = `E${trabajadores.length + 1 < 9 ? `0${trabajadores.length + 1}` : `${trabajadores.length + 1}`}`;

    //* forma turbia de hacerlo
    // for (let i = 0; i <= trabajadores.length + 1; i++){
    //     codigo = `E${i < 9 ? `0${i}` : `${i}`}`;
    // }

    let nuevoTrabajador = { codigo: codigo, nombre: validarNombre(nombre), categoria: validarCategoria(categoria), contratacion: validarContratacion(contratacion)};

    //* push muta el array, concat devuelve uno nuevo
    trabajadores = trabajadores.concat(nuevoTrabajador);
    return listarTrabajadores(trabajadores);
}

function borrarTrabajador(codigo) {
    let confirmacion = confirm('¿Está seguro de que quiere borrar al trabajador?');
    if (confirmacion) {
        let trabajadoresEncontrados = trabajadores.filter(t => t.codigo !== codigo);
        if (trabajadoresEncontrados.length == trabajadores.length){
            alert('No se ha encontrado al trabajador');
        } else {
            return listarTrabajadores(trabajadoresEncontrados);
        }
    } else {
        alert('Operación cancelada');
    }
    return listarTrabajadores(trabajadores);
}

function modificarTrabajador(codigo) {
    let trabajadorEncontrado = trabajadores.filter(t => t.codigo == codigo);
    let valoresActuales = '';
    trabajadorEncontrado.forEach(trabajador => {
        valoresActuales += `Nombre: ${trabajador.nombre}\nCategoría: ${trabajador.categoria}\nContratación: ${trabajador.contratacion}`;
    });

    let confirmacion = confirm(`¿Está seguro que quiere modificar el trabajador seleccionado?\nValores por defecto:\n${valoresActuales}`);
    if (confirmacion) {
        let nuevoNombre = prompt('Introduce el nombre para modificar el actual');
        let nuevaCategoria = prompt('Introduce la categoria para modificar la actual');
        let nuevaContratacion = prompt('Introduce la contratacion para modificar la actual');
        if (nuevoNombre != null && nuevaCategoria != null && nuevaContratacion != null) {
            for (i of trabajadorEncontrado) {
                i.nombre = validarNombre(nuevoNombre);
                i.categoria = validarCategoria(nuevaCategoria);
                i.contratacion = validarContratacion(nuevaContratacion);
            }
            return listarTrabajadores(trabajadorEncontrado);
        } else {
            alert('Debe rellenar todos los campos');
        }
    } else {
        alert('El trabajador no se ha modificado');
        return listarTrabajadores(trabajadorEncontrado);
    }
}

function listarNominas() {
    let listadoNominas = '--LISTADO DE NOMINAS--\n';
    let importeTotal = 0;
    for (i of trabajadores) {
        listadoNominas += `Trabajador: ${i.nombre} | Categoría: ${i.categoria} | Nomina Final =  ${calcularBaseAntiguedad(i)}€\n`;
        importeTotal += calcularBaseAntiguedad(i);
    }
    listadoNominas += `Gasto total en nominas: ${importeTotal}€`;

    return alert(listadoNominas);
}
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
    let txt = '';
    if (nombre.length > 20) {
        txt = 'El nombre no puede sobrepasar los 10 caracteres';
    } 
    return txt;
}

//* Función para validar si el número es entero
function validarCategoria(categoria){
    let txt = '';
    if(!Number(categoria)){
        txt = 'El valor debe de ser un numero entero';
    } else if (categoria < 1 || categoria > 3){
        txt = 'La categoría debe estar entre los valores "1" y "3"';
    }
    return txt;
}

//* Funcion para validar el año de contratación, pongo además < 1955 por el simple hecho de que la edad sobrepasa el año de jubilacion 
function validarContratacion(contratacion){
    let txt = '';
    let objetoAnio = new Date();
    let anio = objetoAnio.getFullYear()
    if(!Number(contratacion)){
        txt = 'El valor debe de ser un numero entero';
    } else if (contratacion > anio || contratacion < 1955) {
        txt = 'Fecha no válida';
    }
}

// let probarValidar = validarNombre('');
// console.log(probarValidar);


// let probarListarTrabajadores = listarTrabajadores(trabajadores);
// let probarCrearTrabajador = crearTrabajador();
// let probarBorrarTrabajador = borrarTrabajador("E01");
// let probarModificarTrabajador = modificarTrabajador("E03");
// let probarListarNominas = listarNominas();
let probarIniciarApp = iniciarApp();
console.log(probarIniciarApp);


//? HAY QUE CAMBIAR LOS METODOS DE CREAR, MODIFICAR Y DEMAS PARA QUE USEN LAS VALIDACIONES CORRECTAMENTE