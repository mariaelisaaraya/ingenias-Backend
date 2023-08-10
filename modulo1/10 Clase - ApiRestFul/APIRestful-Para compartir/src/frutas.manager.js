const fs = require('fs');

function leerFrutas() {
  const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
  const FRUTAS = JSON.parse(datos);
        return FRUTAS;
}

function guardarFrutas(frutas) {
  const datos = JSON.stringify(frutas);
        fs.writeFileSync(__dirname + process.env.DATABASE_PATH, datos);
}

module.exports = { leerFrutas, guardarFrutas };