let productos = {
    "Manzanas": {
        cantidad: 50,
        precio: 0.75,
        categoria: "Frutas"
    },
    "Leche": {
        cantidad: 20,
        precio: 1.20,
        categoria: "Lácteos"
    },
    "Pan": {
        cantidad: 30,
        precio: 0.90,
        categoria: "Panadería"
    },
    "Arroz": {
        cantidad: 40,
        precio: 1.10,
        categoria: "Cereales"
    }
};

$negocio = (function () {


    function agregarProducto(nombre, cantidadString, precioString, categoria) {
        if (productos[nombre]) {
            return false;
        }
        let cantidad = parseInt(cantidadString);
        
        let precio = parseFloat(precioString);
        
        productos[nombre] = { cantidad, precio, categoria };
        return Object.entries(productos);

        // for (i in productos) {
        //     if (i !== nombre) {
        //         productos[nombre] = { cantidad: cantidad, precio: precio, categoria: categoria };
        //         return Object.entries(productos);
        //     } else {
        //         return false;
        //     }
        // }
    }

    function eliminarProducto(nombre) {

        if (!productos[nombre]) {
            return false;
        }
        delete productos[nombre];
        return Object.entries(productos);
    }

    function buscarProducto(nombre) {

        //*Devolviendolo como objeto
        // for (i in productos) {
        //     if (i === nombre) {
        //         return (productos[i]);
        //     }else{
        //         return false;
        //     }
        // }


        let productoEncontrado = {};

        if (nombre in productos) {
            productoEncontrado[nombre] = { cantidad: productos[nombre].cantidad, precio: productos[nombre].precio, categoria: productos[nombre].categoria };
            console.log(productoEncontrado);
            return productoEncontrado;
        }
        return false;

        // //*Pasandolo a array, devolviendolo como array
        // let arrayProductos = Object.entries(productos);
        // let indiceProducto = arrayProductos.findIndex(producto => producto[0] === nombre);
        // if(indiceProducto === - 1){
        //     return false;
        // }
        // return arrayProductos[indiceProducto];
    }

    function actualizarInventario(nombre, cantidad) {
        // for (i in productos) {
        //     if (i === nombre) {
        //         let cantidadAux = productos[i].cantidad;
        //         cantidadAux += cantidad;
        //         if (cantidadAux < 0) {
        //             productos[i].cantidad = 0;
        //             return Object.entries(productos);
        //         } else {
        //             productos[i].cantidad = cantidadAux;
        //             return Object.entries(productos);
        //         }
        //     }
        // }
        // return false;

        if (nombre in productos) {
            let productoActualizado = {};
            let cantidadAux = productos[nombre].cantidad;
            cantidadAux += cantidad;
             if(cantidadAux < 0){
                productos[nombre].cantidad = 0;
                productoActualizado[nombre] = {cantidad: productos[nombre].cantidad, precio: productos[nombre].precio, categoria: productos[nombre].categoria}
                return productoActualizado;
             } else {
                productos[nombre].cantidad = cantidadAux;
                productoActualizado[nombre] = {cantidad: productos[nombre].cantidad, precio: productos[nombre].precio, categoria: productos[nombre].categoria}
                return productoActualizado;
             }
        }
    }

    //* Aqui si que está bien pasado a array no? por que sino no puedo aplicarle metodos para ordenar como el toSorted
    function ordenarProductosPorPrecio() {
        let arrayProductos = Object.entries(productos);
        //* Si solo hago, a - b, estaria restando arrays, lo que hay que hacer es acceder a las propiedades de esos arrays, usando b[1].(propiedad)
        let ordenadoPorPrecio = arrayProductos.toSorted((a, b) => a[1].precio - b[1].precio);
        // let productosOrdenados = Object.fromEntries(ordenadoPorPrecio);
        return ordenadoPorPrecio;
    }

    //* O aquí, si solamente tengo que agregar un objeto a la lista?, podría hacerlo con map?
    function imprimirInventario() {
        let arrayProductos = Object.entries(productos);
        arrayProductos.forEach(productos => {
            productos[1].total = productos[1].cantidad * productos[1].precio;
        });
        return arrayProductos;
    }


    function filtrarProductosPorCategoria(categoria) {

        let productoEncontrado = {};
        for(nombre in productos){
            let producto = productos[nombre];
            if(producto.categoria === categoria){
                productoEncontrado[nombre] = {cantidad: productos[nombre].cantidad, precio: productos[nombre].precio}
            }
        }
        return productoEncontrado;

        // let arrayProductos = Object.entries(productos);
        // let resultado = [];
        // arrayProductos.forEach(producto => {
        //     if (producto[1].categoria == categoria) {
        //         resultado.push(producto);
        //     }
        // });
        // return resultado;
    }
    return {
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        buscarProducto: buscarProducto,
        actualizarInventario: actualizarInventario,
        ordenarProductosPorPrecio: ordenarProductosPorPrecio,
        imprimirInventario: imprimirInventario,
        filtrarProductosPorCategoria: filtrarProductosPorCategoria
    };

}());


window.addEventListener("load", () => {

    //* Recogo el contenedor para poder limpiarlo cuando quiera
    let container = document.getElementById("container");

    //* Recogo los botones del formulario
    let bntAgregarProducto = document.getElementById("bntAgregarProducto");
    let bntEliminarProducto = document.getElementById("bntEliminarProducto");
    let btnBuscarProducto = document.getElementById("btnBuscarProducto");
    let btnActualizarInventario = document.getElementById("btnActualizarInventario");
    let btnOrdenarProductos = document.getElementById("btnOrdenarProductos");
    let btnImprimirInventario = document.getElementById("btnImprimirInventario");
    let btnFiltrarProductos = document.getElementById("btnFiltrarProductos");

    let mensajes = document.getElementById("mensajes");

    //* Recogo el evento click del boton de agregar producto, y dentro creo un formulario para añadir un producto   


    //? EVENTO AGREGAR PRODUCTO

    bntAgregarProducto.addEventListener("click", () => {
        container.innerHTML = '';
        mensajes.innerHTML = '';

        let formularioAgregarProducto = document.createElement("div");

        formularioAgregarProducto.innerHTML = `
        <form id="formularioAgregarProducto">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required><br>
      
      <label for="cantidad">Cantidad:</label>
      <input type="number" id="cantidad" required><br>

      <label for="precio">Precio:</label>
      <input type="number" id="precio" required><br>

      <label for="categoria">Categoría:</label>
      <input type="text" id="categoria" required><br>
      
      <button type="button" id="buscarAgregarProducto">Agregar</button>
    </form>
        `;

        container.appendChild(formularioAgregarProducto);
        let buscarAgregarProducto = document.getElementById("buscarAgregarProducto");

        buscarAgregarProducto.addEventListener("click", () => {
            let nombre = document.getElementById("nombre").value;
            let cantidad = document.getElementById("cantidad").value;
            let precio = document.getElementById("precio").value;
            let categoria = document.getElementById("categoria").value;


            let resultado = $negocio.agregarProducto(nombre, cantidad, precio, categoria);
            let html = `
<table border="1">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Categoría</th>
    </tr>
  </thead>
  <tbody">
`
            if (resultado !== false) {
                resultado.forEach(producto => {
                    html += `<tr>
                    <td>${producto[0]}</td>
                    <td>${producto[1].cantidad}</td>
                    <td>${producto[1].precio}</td>
                    <td>${producto[1].categoria}</td>
                    </tr>`;

                });

                html += `</tbody>
                </table>`;
                mensajes.innerHTML = '';
                let mensaje = document.createElement('p');
                mensaje.textContent = 'Producto agregado correctamente';
                mensajes.appendChild(mensaje);
                container.innerHTML = html;
            } else {
                mensajes.innerHTML = '';
                let mensaje = document.createElement('p');
                mensaje.textContent = 'No se pudo agregar el producto';
                mensajes.appendChild(mensaje);
            }
        });
    });

    //? EVENTO ELIMINAR PRODUCTO

    bntEliminarProducto.addEventListener("click", () => {
        container.innerHTML = '';
        mensajes.innerHTML = '';

        let formularioEliminarProducto = document.createElement("div");

        formularioEliminarProducto.innerHTML = `
        <form id="formularioEliminarProducto">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required><br>
      <button type="button" id="eliminarProducto">Eliminar</button>
    </form>
        `;
        container.appendChild(formularioEliminarProducto);

        let eliminarProducto = document.getElementById("eliminarProducto");
        eliminarProducto.addEventListener("click", () => {
            mensajes.innerHTML = '';
            let confirmacionHMTL = document.createElement("div");
            confirmacionHMTL.innerHTML = `
            <p>¿Estas seguro que deseas eliminar el producto seleccionado?</p>
            <button type=button id="confirmarEliminarSi">Si</button>
            <button type=button id="confirmarEliminarNo">No</button>
            `;

            container.appendChild(confirmacionHMTL);

            let confirmarEliminarSi = document.getElementById("confirmarEliminarSi");
            let confirmarEliminarNo = document.getElementById("confirmarEliminarNo");

            confirmarEliminarSi.addEventListener("click", () => {
                mensajes.innerHTML = '';

                let nombre = document.getElementById("nombre").value;
                let resultado = $negocio.eliminarProducto(nombre);

                console.log(resultado);

                let html = `
        <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Categoría</th>
            </tr>
      </thead>
      <tbody ">
    `
                if (resultado !== false) {
                    console.log('hola');

                    resultado.forEach(producto => {
                        html += `
                        <tr>
                        <td>${producto[0]}</td>
                        <td>${producto[1].cantidad}</td>
                        <td>${producto[1].precio}</td>
                        <td>${producto[1].categoria}</td>
                        </tr>
                        `
                    });
                    html += `</tbody>
                    </table>`
                    let mensaje = document.createElement('p');
                    mensajes.innerHTML = '';
                    mensaje.textContent = 'Producto eliminado correctamente';
                    mensajes.appendChild(mensaje);
                    container.innerHTML = html;
                } else {
                    mensajes.innerHTML = '';
                    let mensaje = document.createElement('p');
                    mensaje.textContent = 'El producto no existe';
                    mensajes.appendChild(mensaje);
                }

            });

            confirmarEliminarNo.addEventListener("click", () => {
                container.innerHTML = '';
                mensajes.innerHTML = '';
            });


        });

    });

    //? EVENTO BUSCAR PRODCUTO

    btnBuscarProducto.addEventListener("click", () => {
        container.innerHTML = ' ';
        mensajes.innerHTML = ' ';

        let formularioBuscarProducto = document.createElement("div");

        formularioBuscarProducto.innerHTML = `
        <form id="formularioBuscarProducto">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required><br>
      <button type="button" id="buscarProducto">Buscar</button>
    </form>
        `;

        container.appendChild(formularioBuscarProducto);

        let buscarProducto = document.getElementById("buscarProducto");

        buscarProducto.addEventListener("click", () => {
            let nombre = document.getElementById("nombre").value;

            let resultado = $negocio.buscarProducto(nombre);
            

            let html = `
    <table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
        </tr>
  </thead>
  <tbody>
`
            if (resultado !== false) {
                html += `
                <tr>
                `;
                for (nombreProducto in resultado){
                    let productoMostrar = {};
                    productoMostrar = productos[nombreProducto];
                    
                    html+= `<td>${nombreProducto}</td>
                    <td>${productoMostrar.cantidad}</td>
                    <td>${productoMostrar.precio}</td>
                    <td>${productoMostrar.categoria}</td>`;
                }
                html += `</tr>
                 </tbody>
                </table>`;
                container.innerHTML = html;
            } else {
                mensajes.innerHTML = '';
                let mensaje = document.createElement('p');
                mensaje.textContent = 'El producto no existe';
                mensajes.appendChild(mensaje);
            }

        });

    });

    //? EVENETO ACTUALIZAR INVENTARIO

    btnActualizarInventario.addEventListener("click", () => {
        mensajes.innerHTML = ' ';
        container.innerHTML = ' ';
        let formularioActualizarInventario = document.createElement("div");

        formularioActualizarInventario.innerHTML = `
        <form id="formularioActualizarInventario">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required><br>
      
      <label for="cantidad">Cantidad:</label>
      <input type="number" id="cantidad" required><br>

      <button type="button" id="actualizarInventario">Actualizar</button>
    </form>
        `;

        container.appendChild(formularioActualizarInventario);

        let actualizarInventario = document.getElementById("actualizarInventario");

        actualizarInventario.addEventListener("click", () => {
            let nombre = document.getElementById("nombre").value;

            let cantidad = document.getElementById("cantidad").value;

            let cantidadAEntero = parseInt(cantidad);
            


            let resultado = $negocio.actualizarInventario(nombre, cantidadAEntero);
            
            // let productoEncontrado = [];
            // for (i in resultado) {
            //     if (resultado[i][0] == nombre) {
            //         productoEncontrado[productoEncontrado.length] = resultado[i];
            //     }
            // }
            // console.log(productoEncontrado);


            let html = `
<table border="1">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Categoría</th>
    </tr>
  </thead>
  <tbody">
`;
            if (resultado !== false) {
                let productoMostrar = {};
               for (nombreProducto in resultado) {
                productoMostrar = productos[nombreProducto];
                    html += `<tr>
                    <td>${nombreProducto}</td>
                    <td>${productoMostrar.cantidad}</td>
                    <td>${productoMostrar.precio}</td>
                    <td>${productoMostrar.categoria}</td>
                    </tr>`;
                        if (productoMostrar.cantidad == 0) {

                        mensajes.innerHTML = '';
                        let mensaje = document.createElement('p');
                        mensaje.textContent = 'Sin stock. El producto necesita reposicion';
                        mensajes.appendChild(mensaje);
                        container.innerHTML = html;
                    } else {

                        mensajes.innerHTML = '';
                        let mensaje = document.createElement('p');
                        mensaje.textContent = 'Producto actualizado correctamente';
                        mensajes.appendChild(mensaje);
                        container.innerHTML = html;
                    }
                };
                html += `</tbody>
                </table>`;
            } else {
                mensajes.innerHTML = '';
                let mensaje = document.createElement('p');
                mensaje.textContent = 'Producto no encontrado';
                mensajes.appendChild(mensaje);
            }
        });

    });

    //? EVENTO ORDENAR PRODUCTOS

    btnOrdenarProductos.addEventListener("click", () => {
        container.innerHTML = '';
        mensajes.innerHTML = '';


        let resultado = $negocio.ordenarProductosPorPrecio();

        let html = `
    <table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
        </tr>
  </thead>
  <tbody ">
`
        if (resultado !== null) {
            resultado.forEach(producto => {
                html += `
                    <tr>
                    <td>${producto[0]}</td>
                    <td>${producto[1].cantidad}</td>
                    <td>${producto[1].precio}</td>
                    <td>${producto[1].categoria}</td>
                    </tr>
                    `
            });
            html += `</tbody>
                </table>`;
            container.innerHTML = html;
        } else {
            mensajes.innerHTML = '';
            let mensaje = document.createElement('p');
            mensaje.textContent = 'Hubo un fallo a la hora de generar los productos';
            mensajes.appendChild(mensaje);
        }
    });

    btnImprimirInventario.addEventListener("click", () => {
        container.innerHTML = '';
        mensajes.innerHTML = '';

        let resultado = $negocio.imprimirInventario();


        let html = `
    <table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Total</th>
        </tr>
  </thead>
  <tbody ">
`
        if (resultado !== null) {
            resultado.forEach(producto => {
                html += `
                    <tr>
                    <td>${producto[0]}</td>
                    <td>${producto[1].cantidad}</td>
                    <td>${producto[1].precio}</td>
                    <td>${producto[1].categoria}</td>
                    <td>${producto[1].total}</td>
                    </tr>
                    `
            });
            html += `</tbody>
                </table>`;
            container.innerHTML = html;
        } else {
            mensajes.innerHTML = '';
            let mensaje = document.createElement('p');
            mensaje.textContent = 'Hubo un fallo a la hora de generar los productos';
            mensajes.appendChild(mensaje);
        }
    });


    //? EVENTO FILTRAR POR CATEGORIA

    btnFiltrarProductos.addEventListener("click", () => {
        container.innerHTML = ' ';
        mensajes.innerHTML = ' ';

        let formularioFiltrarCategoria = document.createElement("div");

        formularioFiltrarCategoria.innerHTML = `
        <form id="formularioFiltrarCategoria">
      <label for="categoria">Categoria:</label>
      <input type="text" id="categoria" required><br>
      <button type="button" id="buscarCategoria">Buscar</button>
    </form>
        `;

        container.appendChild(formularioFiltrarCategoria);

        let buscarCategoria = document.getElementById("buscarCategoria");

        buscarCategoria.addEventListener("click", () => {
            let categoria = document.getElementById("categoria").value;

            let resultado = $negocio.filtrarProductosPorCategoria(categoria);
            console.log(resultado);

            let html = `
    <table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </tr>
  </thead>
  <tbody>
`
            if (Object.keys(resultado).length !==  0) {
                for (nombreProducto in resultado){
                    let productoMostrar = {};
                    productoMostrar = productos[nombreProducto];
                    html += `
                    <tr>
                    <td>${nombreProducto}</td>
                    <td>${productoMostrar.cantidad}</td>
                    <td>${productoMostrar.precio}</td>
                    </tr>`;
                };

                html += ` </tbody>
                </table>`;
                container.innerHTML = html;
            } else {
                mensajes.innerHTML = '';
                let mensaje = document.createElement('p');
                mensaje.textContent = 'La categoría no existe';
                mensajes.appendChild(mensaje);
            }
        });

    });

});
