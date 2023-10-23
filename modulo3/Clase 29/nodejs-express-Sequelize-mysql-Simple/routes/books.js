module.exports = (sequelize, Sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
    }
  );

  return Book;
};
