const db = require("../models");
const Pelicula = db.peliculas;
const Op = db.Op;
// aca generas todas las rutas para peliculas
// Create and Save a new Pelicula
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pelicula
  const Pelicula = {
    titulo: req.body.titulo,
    categoria: req.body.categoria,
    poster: req.body.poster,
    genero: req.body.genero,
    temporadas: req.body.temporadas,
    resumen: req.body.resumen,
    duracion: req.body.duracion,
    trailer: req.body.trailer,
  };

  // Save Pelicula in database
  Pelicula.create(Pelicula)
    .then(data => {
      res.send(data);
      // para usar la plantilla en ves de usar el send deberias usar
      // res.render('vistas/index',{resultado:results})
    })
    .catch(err => {
   
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Pelicula."
      });
    });
};
exports.findJoins = async (req, res) => { 
  const [results, metadata] = await db.sequelize.query(
    `SELECT pelicula_id, titulo,resumen, generos.name as genero, categorias.name as categoria FROM peliculas
    JOIN generos ON generos.genero_id = peliculas.genero_id
    JOIN categorias ON categorias.categoria_id = peliculas.categoria_id`
);
  console.log(JSON.stringify(results, metadata));
  res.render('./index',{resultado:results})
}
// Retrieve all Peliculas from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;


console.log(JSON.stringify(results, null, 2));
  Pelicula.findAll({
    where: condition,
     include: db.categorias ,
    })
    .then(data => {
       res.send(data);
      
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving Peliculas."
      });
    });
};

// Find a single Pelicula with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pelicula.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Pelicula with id = ${id}`
      });
    });
};

// Update a Pelicula by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pelicula.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pelicula was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pelicula with id=${id}. Maybe Pelicula was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pelicula with id=" + id
      });
    });
};

// Delete a Pelicula with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pelicula.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pelicula was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pelicula with id=${id}. Maybe Pelicula was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pelicula with id=" + id
      });
    });
};

// Delete all Peliculas from the database.
exports.deleteAll = (req, res) => {
  Pelicula.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Peliculas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Peliculas."
      });
    });
};

// Find all published Peliculas
exports.findAllPublished = (req, res) => {
  Pelicula.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Peliculas."
      });
    });
};
