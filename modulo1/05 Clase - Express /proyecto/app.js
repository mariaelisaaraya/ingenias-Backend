const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hola, Mundo!")
})

app.get('/estudiantes', (req, res) => {
    res.send("<html><body><p>lista estudiantes.</p></body></html>")
})
app.get('/estudiante', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({ message: "Hi Barbie!" }));
})

// app.use((req, res) => {
//     res.status(404).send("Lo siento no es una ruta de mi proyecto! Ruta con use")
// })
app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));