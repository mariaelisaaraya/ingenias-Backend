const express = require('express');
const cursos = require('./cursos');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenid@s al servidor web con rutas dinámicas!'); 
});

// url params
app.get('/cursos/:categoria', (req, res) => {
  let parametro = req.params.categoria.trim().toLowerCase();
  console.log(parametro)
  if (parametro !== '') {
    let resultado = []
    for (let curso of cursos) {
      if (curso.categoria.toLowerCase() === parametro) {
        resultado.push(curso)
      }
    }
    // opcion 1 de resultado --> if/else comun
    // if (resultado.length > 0) {
    //   res.json(resultado) 
    // } else {
    //   res.json({id:'ERROR', description:'No se encuentra coincidencias'})
    // }

    // opcion 2 ---> triada --> 
    // condicion ? resultado si cumple la condicion: resultado si no cumple la condicion
    resultado.length > 0 ? 
      res.json(resultado) : res.json({id:'ERROR', description:'No se encuentra coincidencias'})
  }
 })

app.get('/cursos', (req, res) => { 
  const queryParams = Object.keys(req.query)
  if (queryParams.length === 0) {
    res.json(cursos);
  } else {
    let resultado = [];
    for (let curso of cursos) {
      res.send( typeof req.query.id)
      // && es and 
      // valor1 | valor2 | result
      // true | true | true |
      // false | true | false
      // true false false
      // false | false | true
      // || es or
      // valor1 | valor2 | result
      // true | true | true 
      // false | true | true
      // true | false |true
      // false | false | false
      console.log(req.query)
      if (curso.nombre.toLowerCase() === String(req.query.nombre).toLowerCase()
        && curso.categoria.toLowerCase() === String(req.query.categoria).toLowerCase()) {
                    resultado.push(curso)
                }
    }
    resultado.length > 0 ? 
      res.json(resultado) : res.json({id:'ERROR', description:req.query.nombre})
  }
})

app.get('/curso/codigo/:id', (req, res) => {
  let codigo = parseInt(req.params.id)
  if (typeof codigo === 'number') {
    let result = []
   // cursos.find((curso) => curso.id  === codigo)
    for (let curso of cursos) {
      if (curso.id === codigo) {
        result.push(curso)
        break
      }
    }
    result.length > 0 ? res.json(result) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
  }
})
app.get('/curso/codigoid/:id', (req, res) => {
  let codigo = parseInt(req.params.id)
  for (let curso of cursos) {
    if (curso.id === codigo) {
      res.json(curso)
    }
  }
  res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
})

app.get('/curso/nombre/:nombre', (req, res) => { })

// rutas inexistentes
app.get("*", (req, res) => { 
    res.status(404).send("Lo siento, pero esta pagina que buscas no existe."); 
}); 

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });