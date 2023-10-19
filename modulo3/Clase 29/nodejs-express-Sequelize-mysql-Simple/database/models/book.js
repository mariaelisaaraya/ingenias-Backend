const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class Book extends Model {}
Book = sequelize.define("Book", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type:  DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});

module.exports = Book;