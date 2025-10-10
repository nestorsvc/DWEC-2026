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

    function agregarProducto(nombre, cantidad, precio, categoria) {
        for (i in productos) {
            if (i !== nombre) {
                productos[nombre] = { cantidad: cantidad, precio: precio, categoria: categoria };
                return Object.entries(productos);
            } else {
                return false;
            }
        }
    }

    function eliminarProducto(nombre) {

        if (!productos[nombre]) {
            return false;
        } else {
            delete productos[nombre];
            return Object.entries(productos);
        }
    }

    function buscarProducto(nombre) {

        //*Devolviendolo como objeto
        for (i in productos) {
            if (i === nombre) {
                return Object.entries(productos[i]);
            }
        }


        //*Pasandolo a array, devolviendolo como array
        // let arrayProductos = Object.entries(productos);
        // let indiceProducto = arrayProductos.findIndex(producto => producto[0] === nombre);
        // return arrayProductos[indiceProducto];
    }

    function actualizarInventario(nombre, cantidad) {
        for (i in productos) {
            if (i === nombre) {
                let cantidadAux = productos[i].cantidad;
                cantidadAux += cantidad;
                if (cantidadAux < 0) {
                    productos[i].cantidad0 = 0;
                    return 'reposicion';
                } else {
                    productos[i].cantidad = cantidadAux;
                    return Object.entries(productos);
                }
            }
        }
        return false;
    }

    function ordenarProductosPorPrecio() {
        let arrayProductos = Object.entries(productos);
        //* Si solo hago, a - b, estaria restando arrays, lo que hay que hacer es acceder a las propiedades de esos arrays, usando b[1].(propiedad)
        let ordenadoPorPrecio = arrayProductos.toSorted((a, b) => a[1].precio - b[1].precio);
        let productosOrdenados = Object.fromEntries(ordenadoPorPrecio);
        return productosOrdenados;
    }

    function imprimirInventario() {
        let arrayProductos = Object.entries(productos);
        arrayProductos.forEach(productos => {
            productos[1].total = productos[1].cantidad * productos[1].precio;
        });
        return arrayProductos;

    }

    function filtrarProductosPorCategoria(categoria) {
        let arrayProductos = Object.entries(productos);
        let arrayCategoriaProducto = [];
        arrayProductos.forEach(producto => {
            if (producto[1].categoria == categoria) {
                arrayCategoriaProducto.push(producto[0], producto[1].cantidad, producto[1].precio);
            }

        });
        return arrayCategoriaProducto;

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


    //* Recogo el evento click del boton de agregar producto, y dentro creo un formulario para añadir un producto   

    bntAgregarProducto.addEventListener("click", () => {
        container.innerHTML = '';
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
  <tbody id="cuerpoTabla">
`
            if (resultado !== false) {
                resultado.forEach(producto => {
                    html+= `<tr>
                    <td>${producto[0]}</td>
                    <td>${producto[1].cantidad}</td>
                    <td>${producto[1].precio}</td>
                    <td>${producto[1].categoria}</td>
                    </tr>`;
                    
                }); {
                }
                html += `</tbody>
                </table>`;
            } else {
                let mensaje = document.createElement('p');
                mensaje.textContent = 'No se pudo agregar el producto';
                formularioAgregarProducto.appendChild(mensaje);
            }
            container.innerHTML = html;
        });
    });



});
console.log($negocio);
