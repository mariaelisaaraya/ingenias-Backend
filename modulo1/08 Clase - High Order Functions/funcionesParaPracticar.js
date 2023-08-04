const productos = require('./productos');

//Función para iterar cada producto enviando el mismo a la consola JS
const iterarProductos = ()=> {
    if (productos.length > 0) {
        productos.forEach((producto) => {
            console.log(producto)
        });
    }
}
//iterarProductos()
//función para buscar un producto por una propiedad
const buscarProductoPorID = ()=> {
    const resultado = productos.find((producto)=> producto.id === 5)
          if (resultado == 'undefined') {
              console.error("No se encontraron coincidencias:", resultado)
          } else {
              console.table(resultado)
          }
}
/*
    REEMPLAZAR LAS PRIMERAS DOS LÍNEAS DE CÓDIGO DE LA FUNCIÓN filtrarProductosPorNombre(), POR CUALQUIERA DE LAS SIGUIENTES OPCIONES:

    //Ejemplo 02
    let nombreProducto = 'Smartwatch'; (para una búsqueda por parte del nombre de un producto)
    const resultado = productos.filter((producto)=> producto.nombre.includes(nombreProducto));

    //Ejemplo 03
    let nombreProducto = 'Smartwatch'; (para una búsqueda por parte del nombre de un producto)
    const resultado = productos.filter((producto)=> producto.nombre.toLowerCase().includes(nombreProducto));
    
    //Ejemplo 04
    let nombreProducto = 'book';        //(para una búsqueda combinada entre parte del nombre del producto, y la categoría exacta)
    let categoriaProducto = 'Portátil';
    const resultado = productos.filter((producto)=> producto.nombre.includes(nombreProducto.toLowerCase()) && producto.categoria === categoriaProducto);
    
    //Ejemplo 05
    let importeProducto = 150_000;      //(para una búsqueda por precio que sea mayor al establecido en la variable)
    const resultado = productos.filter((producto)=> producto.importe > importeProducto);
*/

const filtrarProductosPorNombre = ()=> {
    let categoriaProducto = 'Tablet';
    const resultado = productos.filter((producto)=> producto.categoria === categoriaProducto);
          if (resultado !== []) {
                console.table(resultado);
          } else {
                console.error("No se encontraron coincidencias.");
          }
}

const mapearProductosEnArraySimple = ()=> {
    const resultado = productos.map((producto)=> {
        return {
                    nombre: producto.nombre
               }
    })
    console.table(resultado)
}

const verificarExistenciaDeProductos = ()=> {
    const existeNotebook = productos.some(producto => producto.nombre === 'Notebook Gamer 17 pulgadas')
          console.log("¿Existe el producto?:", existeNotebook)

    const existeMac = productos.some(producto => producto.nombre === "Macbook Pro 13'")
          console.log("¿Existe el producto?:", )
}

const mapearProductosCreandoCamposCalculados = ()=> {
    const resultado = productos.map((producto)=> {
        return {
                nombre: producto.nombre,
                importe: producto.importe,
                importe10Plus: (producto.importe * 1.10),
                importe10Off: (producto.importe * 0.90)
               }
    })
}

const calcularCarritoDeProductos = ()=> {
    const carrito = [{nombre: 'Tablet PAD 9.7', importe: 195000},
                     {nombre: 'Smartwatch 2" red', importe: 24200}];
    const resultado = carrito.reduce((acc, producto)=> {
        return acc + producto.importe, 0
    })
    console.log("Importe total del carrito:", resultado)
}

const ordenarProductosPorNombre = ()=> { //invirtiendo signos o return, cambia a orden descendente
    productos.sort((a, b)=> {
        if (a.nombre > b.nombre) {
            return -1;
        }
        if (a.nombre < b.nombre) {
            return 1;
        }
        return 0;
    })
}