const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    port: config.db.DB_PORT,
    dialect: config.db.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.peliculas = require("./peliculas.model.js")(sequelize, Sequelize, DataTypes);
db.categorias = require("./categorias.model.js")(sequelize, Sequelize, DataTypes);
db.generos = require("./generos.model.js")(sequelize, Sequelize, DataTypes);
db.actores = require("./actores.model.js")(sequelize, Sequelize, DataTypes);
db.tags = require("./tags.model.js")(sequelize, Sequelize, DataTypes);

db.tags.belongsToMany(db.peliculas, {
  through: "peliculas_tags",
  foreignKey: "tag_id",
  otherKey: "pelicula_id"
});
db.peliculas.belongsToMany(db.tags, {
  through: "peliculas_tags",
  foreignKey: "pelicula_id",
  otherKey: "tag_id"
});

db.actores.belongsToMany(db.peliculas, {
  through: "peliculas_actores",
  foreignKey: "actor_id",
  otherKey: "pelicula_id"
});
db.peliculas.belongsToMany(db.actores, {
  through: "peliculas_actores",
  foreignKey: "pelicula_id",
  otherKey: "actor_id"
});
db.peliculas.hasMany(db.categorias, {foreignKey: 'categoria_id'})
db.categorias.belongsTo(db.peliculas, { foreignKey: 'categoria_id' })
db.peliculas.hasMany(db.generos, {foreignKey: 'genero_id'})
db.generos.belongsTo(db.generos, {foreignKey: 'genero_id'})
module.exports = db;
