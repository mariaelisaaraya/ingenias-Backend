const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = process.env.PORT || 3008
const secretKey = process.env.SECRET_KEY;
const userToValidate = {username: "Cameron", password: "H@lt4ndC4tchFire"};

// MIDLEWARES UTILIZADOS EN LA APLICACIÓN BACKEND
app.use(express.json());
//  Verificar el token 
function verifyToken(req, res, next) {
    const token = req.headers['authorization'] || null
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
          err ? res.status(401).json({ error: 'Token inválido.' })
              : req.decoded = decoded
          next()
        })
    } else {
        res.status(401).json({ error: 'Token no proporcionado.' })
    }
}
// raiz
app.get('/', (req, res, next) => {
     res.status(200).send("hola")
})

// la ruta login debe recibir los datos de un usuario válido para generar su JWT
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const textoCodificado = Buffer.from(password).toString('base64');
    console.log("textoCodificado",textoCodificado)
    const textoDecodificado = Buffer.from(textoCodificado, 'base64').toString('ascii')
    console.log("textoDecodificado",textoDecodificado)
    console.log(`Datos recibidos: Usuario: ${username}, Password: ${password}`)

    if (username === "Cameron" && password === "H@lt4ndC4tchFire") {
        const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' })
        res.status(200).json({ token: token })
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
})

 // la ruta rutaprotegida recibe el token en el header Datos segurizados con un JWT válido
app.get('/rutaprotegida', verifyToken, (req, res, next) => {
    console.log("hola rutaprotegida")

    const username = req.decoded.username || null
    res.status(200).json({ "mensaje": "Has accedido correctamente a la ruta protegida.", "username": username})
    next()
})

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT} ingrese a  http://localhost:${PORT}`) )