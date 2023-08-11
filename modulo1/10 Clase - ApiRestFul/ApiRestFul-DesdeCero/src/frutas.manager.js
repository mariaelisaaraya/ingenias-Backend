const fs = require('fs');

// esta funcion me lee mis datos del frutas.json devuelve en un objeto del tipo json para usar 
function leerFrutas(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const FRUTAS = JSON.parse(datos)
    return FRUTAS
}

// esta funcion escribe mi archivo frutas.json
function guardarFrutas(frutas){
    const datos = JSON.stringify(frutas);
    fs.writeFileSync(__dirname + process.env.DATABASE_PATH ,datos)
}

// esta funcion me busca una fruta segun su id
function obtenerFrutaFind(id){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
    const frutas = JSON.parse(datos);
    const fruta = frutas.find(f => f.id === id) || [{error: `Error en el índice`,
    descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${id}`}]
    return fruta
}

function actualizarFruta(id, actualizadafruta){
    const lista = leerFrutas()
    fs.readFile(__dirname + process.env.DATABASE_PATH, 'utf8', (err, data) => {
      lista[id]=actualizadafruta
      guardarFrutas(lista)
    })
}

function eliminarFruta(id){
    fs.readFile(__dirname + process.env.DATABASE_PATH, 'utf8', (err, data) => {
    let lista = JSON.parse(data).filter(fruta => fruta.id !== id)
    guardarFrutas(lista)
    })
}

// function obtenerFrutaFilter(id){
//     DB = leerFrutas()
//     const fruta = DB.filter(f => f.id === id) 
//     if (fruta === []) {
//        return [{error: `Error en el índice`,
//     descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${id}`}]
//     }
//     return fruta
// }

module.exports = {leerFrutas, guardarFrutas, obtenerFrutaFind,actualizarFruta, eliminarFruta}