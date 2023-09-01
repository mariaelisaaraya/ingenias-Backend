// @ts-nocheck
const fs = require('fs');
/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method leerFrutas
* @return {frutas[]}
*/
// esta funcion me lee mis datos del frutas.json devuelve en un objeto del tipo json para usar 
function leerFrutas(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const FRUTAS = JSON.parse(datos)
    return FRUTAS
}
/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
// esta funcion escribe mi archivo frutas.json
* @method guardarFrutas
* @param {Object} frutas A frutas object
* @param {Number} frutas.id
* @param {String} frutas.nombre The name on the config object
* @param {Number} frutas.importe
* @param {Number} frutas.stock The name on the config object
*/
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

// function obtenerFrutaFilter(id){
//     DB = leerFrutas()
//     const fruta = DB.filter(f => f.id === id) 
//     if (fruta === []) {
//        return [{error: `Error en el índice`,
//     descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${id}`}]
//     }
//     return fruta
// }

module.exports = {leerFrutas, guardarFrutas, obtenerFrutaFind}