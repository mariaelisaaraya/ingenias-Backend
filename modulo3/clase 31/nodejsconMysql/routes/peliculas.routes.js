module.exports = app => {
  const peliculaController = require("../controllers/pelicula.controller.js");

  const router = require("express").Router();

  // Create a new Book
  router.post("/", peliculaController.create);
  // para probar el html
  router.get("/", peliculaController.findJoins)
  // Retrieve all Books
  router.get("/peliculas", peliculaController.findAll);

  // Retrieve all published Books
  // router.get("/published", peliculaController.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", peliculaController.findOne);

  // Update a Book with id
  router.put("/:id", peliculaController.update);

  // Delete a Book with id
  router.delete("/:id", peliculaController.delete);

  // Delete all Books
  router.delete("/", peliculaController.deleteAll);

  app.use("/api/peliculas", router);
};
