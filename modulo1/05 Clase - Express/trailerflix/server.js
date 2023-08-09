// In src/index.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

//app.use(express.static(path.join(__dirname,'trailerflix')))

// routes
app.get("/", (req, res) => { 
    res.send("<h1>Hola, Mundo!</h1></br><h2>It's Working!</h2>"); 
}); 
app.get("/nosotras", (req, res) => { 
    res.send("Aqui tienes indormacion sobre nosotras"); 
}); 
app.get("/curso", (req, res) => { 
    res.send("Aca encontraras una lista de los cursos"); 
}); 
// Ruta predeterminda para manejar las inexistentes
// hay dos formas de escribir esto
app.use((req, res) => { 
    res.status(404).send("Lo siento, pero esta pagina que buscas no existe."); 
}); 
// app.get("*", (req, res) => { 
//     res.status(404).send("Lo siento, pero esta pagina que buscas no existe."); 
// }); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});