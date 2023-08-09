const productos = require('./productos')
// ////////////////////////////////////////////////////////////////
// // forEach 
// ////////////////////////////////////////////////////////////////
productos.forEach(producto => console.table(producto))

const paises = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay']
paises.forEach(pais => console.log(pais))
for (let p of paises) {
    console.log(p)
}

// ////////////////////////////////////////////////////////////////
// // find 
// ////////////////////////////////////////////////////////////////
// array object
const macbook = productos.find(producto => producto.id === 3)
if (macbook !== undefined) console.log(macbook)
// array element
const mipais = paises.find(pais => pais === 'Argentina')
if (mipais !== undefined) console.log("Nuestro pais: ", mipais)

// ////////////////////////////////////////////////////////////////
// // filter 
// ////////////////////////////////////////////////////////////////
const misTablet = productos.filter(producto => producto.categoria === "Tablet")
const teles = productos.filter(producto => producto.categoria === "TV")
console.table(misTablet)
console.log("largo  del array de tablet", misTablet.length)
console.log(teles)
console.log("largo  del array de teles", teles.length)


////////////////////////////////////////////////////////////////
// metodos combinados 
////////////////////////////////////////////////////////////////
let palabra = 'Smartwatch';// (para una búsqueda por parte del nombre de un producto)
const resultado0 = productos.filter(p => p.nombre.includes(palabra))
console.log("resultado0", resultado0)

let palabra1 = 'BOOK';// (para una búsqueda por parte del nombre de un producto)
const resultado1 = productos.filter(p => p.nombre.toLowerCase().includes(palabra1.toLowerCase()))
console.log('resultado1', resultado1)

let palabra2 = 'blet';// (para una búsqueda por parte del nombre de un producto)
const resultado2 = productos.filter(p => p.nombre.toLowerCase().includes(palabra2.toLowerCase())
   || p.categoria.toLowerCase() === palabra2.toLowerCase())
console.log('resultado2',resultado2)

// ////////////////////////////////////////////////////////////////
// // some 
// ////////////////////////////////////////////////////////////////

const existeMacbook = productos.some(p => p.nombre.includes('tv'))
console.log('existeMacbook',existeMacbook)


// ////////////////////////////////////////////////////////////////
// // map 
// ////////////////////////////////////////////////////////////////

const mapearProductosCreados = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            importe10Plus: (producto.importe * 1.10),
            importe10Off: (producto.importe * 0.90),
        }
    })
    console.log("mapearProductosCreados",resultado)
}
mapearProductosCreados()

const reducirObjetoProductos = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
        }
    })
    console.log("reducirObjetoProductos",resultado)
}
reducirObjetoProductos()

const pasarAMayusculaElNombre = () => {
    const resultado = productos.map((producto) => {
        return {
            id: producto.id,
            PRODUCTOS: producto.nombre.toUpperCase()
        }
    })
    console.table(resultado)
}
pasarAMayusculaElNombre()

// ////////////////////////////////////////////////////////////////
// // reduce 
// ////////////////////////////////////////////////////////////////

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = productos.reduce((accumulator, currentValue) => accumulator + currentValue.importe, initialValue);

console.log("Total: ", sumWithInitial)

const ordenarProductosPorNombre = ()=> { //invirtiendo signos o return, cambia a orden descendente
    const result = productos.sort((a, b)=> {
        if (a.nombre > b.nombre) {
            return -1;
        }
        if (a.nombre < b.nombre) {
            return 1;
        }
        return 0;
    })
    console.log(result)
}
ordenarProductosPorNombre()