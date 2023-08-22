// variables de entorno
const dotenv = require('dotenv');
dotenv.config();
// importo las funciones para usar 
const { connectToMongoDB, disconnectFromMongoDB } = require('./src/mongodb');

// servidor 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});
app.get('/', (req, res) => { res.status(200).end('¡Bienvenido a la API de frutas!'); } );

//Endpoints
app.get('/frutas', async (req, res) => {});

app.get('/frutas/:id', async (req, res) => {});
  
app.get("*", (req, res) => {
  res.json({
    error: "404",
    message: "No se encuentra la ruta solicitada",
  });
});

//Inicia el servidor
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );
