const express = require('express');
const productos = require('./productos'); 
const app = express();
const PORT = 3000;

function getAllProductos() {
    return productos ? productos :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

app.get('/productos', (req, res) => { 
    res.json(getAllProductos())
})

app.get('/productos/:id', (req, res) => {

})
 
app.get('/productos/:nombre', (req, res) => { 

})


app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));