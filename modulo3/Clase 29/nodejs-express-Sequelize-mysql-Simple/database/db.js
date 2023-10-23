const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.DB_NAME,
    database.DB_USER,
    database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;
