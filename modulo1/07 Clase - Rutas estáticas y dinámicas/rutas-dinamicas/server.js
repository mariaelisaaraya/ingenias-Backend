const express = require('express');
const cursos = require('./cursos');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenid@s al servidor web con rutas dinámicas!'); 
});

app.get('/cursos/:categoria', (req, res) => {
  
 })

app.get('/cursos', (req, res) => { })

// rutas inexistentes
app.get("*", (req, res) => { 
    res.status(404).send("Lo siento, pero esta pagina que buscas no existe."); 
}); 

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });