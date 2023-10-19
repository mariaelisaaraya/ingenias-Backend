const Sequelize = require('sequelize');

const conexion = new Sequelize(
    "library", // name of database
    "root", //username
    "root", // password
    {
        host: "localhost",
        dialect: "mysql"
    }
); 

async function Conectarme() {
    try {
        await conexion.authenticate();
        console.log("Conexion authenticated")
    } catch (err) {
     console.error(err, "Error authenticating");   
    }
}

async function Desconectarme() {
    try {
        await conexion.close();
        console.log("Conexion closed successfully")
    } catch (err) {
     console.error(err, "Error closing connection");   
    }
}

Conectarme()
setTimeout(() => Desconectarme(), 1000);