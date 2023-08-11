const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { leerFrutas,guardarFrutas,  obtenerFrutaFind,actualizarFruta, eliminarFruta } = require('./src/frutas.manager')
const PORT = process.env.PORT || 3000;
let DB = [];
//MIDDLEWARE 

dotenv.config();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    DB = leerFrutas();
    next();
})

// SERVIDOR WEB
// metodo get generico
app.get('/', (req,res)=>{
    res.send(DB)
})
// metodo get especifico
app.get('/:id',(req,res)=>{
    console.log("VALOR RECIBIDO:", req.params.id)
    console.log(typeof req.params.id)
    const id = parseInt(req.params.id)
    const fruta = obtenerFrutaFind(id)
    res.send(fruta);
})
// metodo post
app.post('/',(req,res)=>{
    const nuevaFruta = req.body;
    DB.push(nuevaFruta);
    guardarFrutas(DB)
    res.status(201).send("Fruta agregada!")
})
// metodo put
app.put('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const fruta = req.body;
    actualizarFruta(id,fruta);
    res.status(200).send('Fruta actualizada!');
})
// metodo delete
app.delete('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    eliminarFruta(id);
    res.status(200).send('Fruta eliminada!');
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});