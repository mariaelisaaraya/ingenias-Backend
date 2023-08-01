const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

// Inicializamos  el Motor de plantillas elegido 
app.set('view engine', 'ejs')
//app.use(express.static('views'))

app.use(express.static(path.join(__dirname,'views')))
const computerProducts = [
    { name: 'Notebook Lenovo', price: 1500 },
    { name: 'MAC pro', price: 2500 },
    { name: 'ASUS Zenbook 17 Fold OLED ', price: 3600 }
]
// routes
app.get("/", (req, res) => { 
    const data = {
        title: 'Nuestro sitio Web con EJS',
        message: 'Bienvenido a nuestro sitio generado a partir de un motor de plantillas.'
    }
    res.render('index', data)
   // res.send("Ruta raiz"); 
}); 
app.get("/productos", (req, res) => { 
    const data = {
        title: 'Nuestro sitio Productos',
        message: 'Bienvenido a nuestro sitio generado a partir de un motor de plantillas.',
        products: computerProducts
    }
    res.render('productos', data)
    //res.send("Ruta productos"); 
}); 
// rutas inexistentes
app.get("*", (req, res) => { 
    res.status(404).send("Lo siento, pero esta pagina que buscas no existe."); 
}); 
// iniciar servidor
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});