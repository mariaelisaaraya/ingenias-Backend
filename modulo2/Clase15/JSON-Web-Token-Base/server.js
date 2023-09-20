const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = process.env.PORT || 3008;
const secretKey = process.env.SECRET_KEY;
const userToValidate = {username: 'Cameron', password: 'H@lt-And_Catch?F1re'}

// MIDLEWARES UTILIZADOS EN LA APLICACIÓN BACKEND
app.use(express.json())
function verifyToken(req, res, next) { 
    // Verificar el token en las solicitudes protegidas
}

app.post('/login', (req, res) => {
    // recibir los datos de un usuario válido para generar su JWT
})

app.get('/rutaprotegida', verifyToken, (req, res, next) => {
 // Datos segurizados con un JWT válido
})

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`) );