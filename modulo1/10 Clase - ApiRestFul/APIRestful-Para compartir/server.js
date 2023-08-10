const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { leerFrutas, guardarFrutas } = require('./src/frutas.manager');
const PORT = process.env.PORT || 3000;
let DB = [];


//MIDDLEWARE 

dotenv.config();

app.use(bodyParser.json());

app.use((req, res, next)=> {  
          DB = leerFrutas(); 
          next(); 
})

//SERVIDOR WEB
app.get('/', (req, res) => {
    res.send(DB);
});

app.get('/frutas/:id', (req, res) => {
  console.table(DB)
  // console.log("VALOR RECIBIDO:", req.params.id)
  // console.log(typeof req.params.id)
  const resultado = DB.find(fruta => fruta.id == parseInt(req.params.id)) || [{error: `Error en el índice`, descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${req.params.id}`}]
    res.send(resultado);
});

app.post('/frutas', (req, res) => {
  const nuevaFruta = req.body;
        DB.push(nuevaFruta);
        guardarFrutas(DB);
        res.status(201).send('Fruta agregada!');
});

app.get('*', (req, res) => {
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});