module.exports = (sequelize, Sequelize, DataTypes) => {
  const Generos = sequelize.define(
    "generos", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field:"genero_id"
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

  return Generos;
};
