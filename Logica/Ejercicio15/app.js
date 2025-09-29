let trabajadores = [
    { codigo: "E01", nombre: "Nestor Serna", categoria: 1, contratacion: 2018 },
    { codigo: "E02", nombre: "Manolo Lama", categoria: 2, contratacion: 2020 },
    { codigo: "E03", nombre: "Fito", categoria: 3, contratacion: 2023 }
];

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

    let nuevoTrabajador = { codigo: codigo, nombre: nombre, categoria: categoria, contratacion: contratacion };
    //* push muta el array, concat devuelve uno nuevo

    trabajadores = trabajadores.concat(nuevoTrabajador);
    return trabajadores;
}

function borrarTrabajador(codigo) {
    let confirmacion = confirm('¿Está seguro de que quiere borrar al trabajador?');
    if (confirmacion) {
        let trabajadoresEncontrados = trabajadores.filter(e => e.codigo !== codigo);
        return trabajadoresEncontrados;
    } else{
        alert('Operación cancelada');
    }
    return trabajadores;
}

let probar = borrarTrabajador('E02');
console.log(probar);
