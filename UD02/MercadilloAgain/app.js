$negocio = (function () {
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

    function mostrarProductos(nombre) {
        return productos[nombre];
    }

    function agregarProducto(nombre, cantidad, precio, categoria) {
        if (productos[nombre]) {
            return false;
        }
        productos[nombre] = { cantidad, precio, categoria };
        let productoEncontrado = {};
        productoEncontrado[nombre] = { cantidad, precio, categoria };
        console.log(productos);

        return productoEncontrado;
    }

    function eliminarProducto(nombre) {
        let productoEliminado = {};
        let producto = productos[nombre];
        if (!productos[nombre]) {
            return false;
        } else {
            let confirmacion = confirm("Desea eliminar el producto?");
            if (confirmacion) {
                productoEliminado[nombre] = { cantidad: producto.cantidad, precio: producto.precio, categoria: producto.categoria };
                delete productos[nombre];
                return productoEliminado;
            } else {
                return false;
            }
        }
    }

    function buscarProducto(nombre) {
        let productoEncontrado = {};
        if (nombre in productos) {
            let producto = productos[nombre];
            productoEncontrado[nombre] = { cantidad: producto.cantidad, precio: producto.cantidad, categoria: producto.categoria };
            return productoEncontrado;
        }
        return undefined;
    }

    function actualizarProducto(nombre, cantidad) {
        let productoActualizado = {};
        if (nombre in productos) {
            let producto = productos[nombre];
            producto.cantidad += cantidad;
            if (producto.cantidad < 0) {
                alert('Sin stock, se necesita reposición');
                productoActualizado[nombre] = { cantidad: 0, precio: producto.precio, categoria: producto.categoria };
                return productoActualizado;
            } else {
                productoActualizado[nombre] = { cantidad: producto.cantidad, precio: producto.precio, categoria: producto.categoria };
                return productoActualizado;
            }
        }
        return undefined;
    }

    function ordenarProductosPorPrecio(){
    }

    function imprimirInventario(){
        let productosArray = [];
        for (let nombre in productos){
            productosArray.push(productos[nombre] = {nombre:nombre, cantidad: productos[nombre].cantidad, precio: productos[nombre].precio, categoria: productos[nombre].categoria, total: productos[nombre].cantidad * productos[nombre].precio});
        }
        return productosArray;
    }

    function filtrarPorCategoria(categoria){
        let productoEncontrado = {};
        for (nombre in productos){
            if(productos[nombre].categoria === categoria){
                productoEncontrado[nombre] = {cantidad: productos[nombre].cantidad, precio : productos[nombre].precio}
            } 
        }
        return productoEncontrado;
    }

    return {
        mostrarProductos,
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarProducto,
        imprimirInventario,
        filtrarPorCategoria
    };
})();

window.addEventListener("load", () => {

    let mensajes = document.getElementById("mensajes");



    // Agregar producto
    let btnAgregarProducto = document.getElementById("btnAgregarProducto");
    btnAgregarProducto.addEventListener("click", () => {

        let nombre = document.getElementById('nombreAgregarProdcucto').value;
        let cantidad = document.getElementById('cantidadAgregarProducto').value;
        let precio = document.getElementById("precioAgregarProducto").value;
        let categoria = document.getElementById("categoriaAgregarProducto").value;


        let resultado = $negocio.agregarProducto(nombre, cantidad, precio, categoria);

        let html = `<table border=1>
        <thead>
        <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Categoria</th>
        </tr>
        </thead>
        <tbody>
        `;

        for (let nombre in resultado) {
            html += `
            <tr>
            <td>${nombre}</td>
            <td>${resultado[nombre].cantidad}</td>
            <td>${resultado[nombre].precio}</td>
            <td>${resultado[nombre].categoria}</td>
            </tr>
            `;
        }
        html += `</tbody>
        </table>`

        mensajes.innerHTML = html;
    });


    // Eliminar producto

    let btnEliminarProducto = document.getElementById("btnEliminarProducto");
    btnEliminarProducto.addEventListener("click", () => {
        let nombre = document.getElementById('nombreEliminarProducto').value;
        let resultado = $negocio.eliminarProducto(nombre);

        let html = `<table border=1>
        <thead>
        <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Categoria</th>
        </tr>
        </thead>
        <tbody>
        `;

        for (let nombre in resultado) {
            html += `
            <tr>
            <td>${nombre}</td>
            <td>${resultado[nombre].cantidad}</td>
            <td>${resultado[nombre].precio}</td>
            <td>${resultado[nombre].categoria}</td>
            </tr>
            `;
        }
        html += `</tbody>
        </table>`

        mensajes.innerHTML = html;
    });

    let btnBuscarProducto = document.getElementById("btnBuscarProducto");

    btnBuscarProducto.addEventListener("click", () => {

        let nombre = document.getElementById("nombreBuscarProducto").value;

        let resultado = $negocio.buscarProducto(nombre);

        if (resultado !== undefined) {
            let html = `<table border=1>
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoria</th>
            </tr>
            </thead>
            <tbody>
            `;

            for (let nombre in resultado) {
                html += `
                <tr>
                <td>${nombre}</td>
                <td>${resultado[nombre].cantidad}</td>
                <td>${resultado[nombre].precio}</td>
                <td>${resultado[nombre].categoria}</td>
                </tr>
                `;
            }
            html += `</tbody>
            </table>`
            mensajes.innerHTML = html;
        } else {
            html = 'Producto no encontrado';
            mensajes.innerHTML = html;
        }

    });

    //Actualizar inventario

    let btnActualizarInventario = document.getElementById('btnActualizarInventario');

    btnActualizarInventario.addEventListener("click", () => {

        let nombre = document.getElementById('nombreActualizarInventario').value;
        let cantidad = document.getElementById('cantidadActualizarInventario').value;

        let cantidadEntero = parseInt(cantidad);

        let resultado = $negocio.actualizarProducto(nombre, cantidadEntero);

        if (resultado !== undefined) {
            let html = `<table border=1>
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoria</th>
            </tr>
            </thead>
            <tbody>
            `;

            for (let nombre in resultado) {
                html += `
                <tr>
                <td>${nombre}</td>
                <td>${resultado[nombre].cantidad}</td>
                <td>${resultado[nombre].precio}</td>
                <td>${resultado[nombre].categoria}</td>
                </tr>
                `;
            }
            html += `</tbody>
            </table>`
            mensajes.innerHTML = html;
        } else {
            html = 'Producto no encontrado';
            mensajes.innerHTML = html;
        }

    });

    let btnImprimirInventario = document.getElementById("btnImprimirInventario");

    btnImprimirInventario.addEventListener("click",()=>{
        let resultado = $negocio.imprimirInventario();
        let html = `<table border=1>
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Total</th>
            </tr>
            </thead>
            <tbody>
            `;

            resultado.forEach(producto => {
                html += `
                <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td>${producto.categoria}</td>
                <td>${producto.total}</td>
                </tr>
                `;
            }); 
            html += `</tbody>
            </table>`
            mensajes.innerHTML = html;
    });

    let btnBuscarCategoria = document.getElementById("btnBuscarCategoria");
    btnBuscarCategoria.addEventListener("click",()=>{
        let categoria = document.getElementById("categoriaFiltrar").value;

        let resultado = $negocio.filtrarPorCategoria(categoria);
        console.log(resultado);

         if (resultado !== undefined) {
            let html = `<table border=1>
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            `;

            for (let nombre in resultado) {
                html += `
                <tr>
                <td>${nombre}</td>
                <td>${resultado[nombre].cantidad}</td>
                <td>${resultado[nombre].precio}</td>
                </tr>
                `;
            }
            html += `</tbody>
            </table>`
            mensajes.innerHTML = html;
        } else {
            html = 'Producto no encontrado';
            mensajes.innerHTML = html;
        }

    });
        

});
