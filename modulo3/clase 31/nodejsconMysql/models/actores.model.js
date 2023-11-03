module.exports = (sequelize, DataTypes) => {
  const Actores = sequelize.define(
    "Actores", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field:"actor_id"
      },
      nombreCompleto: {
        type: DataTypes.STRING
      },
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
    }
  );

  return Actores;
};