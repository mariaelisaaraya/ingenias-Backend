const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config.js");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
// Paso 4 (directorios estaticas)
app.use(express.static('./vistas'))
app.use(express.static('./controlador'))
app.use(express.static('./modelo'))
// Paso 5 configurar el motor vistas
app.set('views','./vistas')
app.set('view engine','ejs')
const corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");

const Categorias = db.categorias;
db.sequelize.sync().then(() => {
  initial(); // Just use it in development, at the first time execution!. Delete it in production
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this tutorial." });
});

// api routes
require("./routes/peliculas.routes")(app);
// require("./app/routes/categorias.routes")(app);
// require("./app/routes/actores.routes")(app);


categorias = [{
    id: 1,
    name: "Serie"
}, {
    id: 2,
    name: "Pelicula"
}]
// Just use it in development, at the first time execution!. Delete it in production
function initial() {
  categorias.forEach(g => {
    Categorias.findOrCreate({
      where: {id: g.id},
      defaults: {
            id: g.id,
            name: g.name,
      }
    }).then((row, isCreated) => {
    if(isCreated){
          //user created
          console.log('creted Genero', row);
      }
    });
  })

}
// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


