const productos = require('./productos'); 
//const frutas = require('./frutas');

const paises = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay']

paises.push('Brasil')
productos.push({
    id: 7,
    nombre: "TV oled",
    importe: 230000,
    categoria: ''
})

console.log("productos: ", productos)
console.log("paises: ", paises)


// // saca el ultimo elemento del array
paises.pop()
productos.pop()
console.log("productos pop: ", productos)
console.log("paises pop: ", paises)

var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log('Elemento eliminado: ' + eliminado);
// "Elemento eliminado: ángel"

// // saca el primer elemento del array
paises.shift()
productos.shift()
console.log("productos shift: ", productos)
console.log("paises shift: ", paises)


const index = paises.findIndex(p => p === "Ecuador");
console.log(index); // 3
console.log(paises[index]); // blueberries

const idx = paises.findIndex("Chile");
if (idx > -1) {
    paises.splice(idx, 1)
}






function duplicar(num) {
    console.log(num*2)
}

function realizarCalculo(num1, num2, salida) {
    salida(num1 * num2)
}

realizarCalculo(10, 2, console.log)
realizarCalculo(10, 2, duplicar)