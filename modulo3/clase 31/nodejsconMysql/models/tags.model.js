module.exports = (sequelize, Sequelize, DataTypes) => {
  const Tags = sequelize.define(
    "tags", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
            primaryKey: true,
          field:"tag_id"
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
    }
  );

  return Tags;
};
