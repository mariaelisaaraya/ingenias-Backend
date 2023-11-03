const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Peliculas = sequelize.define('Peliculas', {
    id:{
      type:DataTypes.INTEGER(11).UNSIGNED,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      field:"pelicula_id"
    },
    titulo:{
      type:DataTypes.STRING(200),
      field: "titulo",
      allowNull: false,
    },
    poster:{
      type:DataTypes.STRING(200),
      allowNull: false,
      field:"poster"

    },
    categoria:{
      type:DataTypes.INTEGER,
      allowNull: false,
      field:"categoria_id"
    },
    genero:{
      type:DataTypes.INTEGER,
      allowNull: false,
      field:"genero_id"
    },
    resumen:{
      type:DataTypes.STRING(1000),
      allowNull: false,
      field:"resumen"
    },
    temporadas:{
      type:DataTypes.STRING(20),
      allowNull: true,
      field:"temporadas"
    },
    duracion:{
      type:DataTypes.STRING(200),
      allowNull: true, // esto lo hace no obligatorio en la base de datos
      field:"duracion"
    },
    trailer:{
      type:DataTypes.STRING(200),
      allowNull: true,
      field:"trailer"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updatedAt"
    }
  }, {});
  Peliculas.associate = function(models) {
    Peliculas.belongsTo(models.categorias, {
      foreignKey: 'categoria_id',
      onDelete: 'CASCADE'
    });
  };
  Peliculas.associate = function(models) {
    Peliculas.belongsTo(models.generos, {
      foreignKey: 'genero_id',
      onDelete: 'CASCADE'
  });
  };

  return Peliculas;
};