module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define(
    "categorias", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field:"categoria_id"
      },
      name: {
        type: DataTypes.STRING
      },
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
    }
  );

  return Categorias;
};