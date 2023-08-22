const dotenv = require('dotenv');
      dotenv.config();
const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URLSTRING  || "";
const client = new MongoClient(URI);

async function connectToMongoDB() {
      try {
          await client.connect();
                console.log('Conectado a MongoDB');
          return client;
      } catch (error) {
              console.error('Error al conectar a MongoDB:', error);
          return null;
      }
}

async function disconnectFromMongoDB() {
      try {
        await client.close();
              console.log('Desconectado de MongoDB');
      } catch (error) {
            console.error('Error al desconectar de MongoDB:', error);
      }
}

module.exports = { connectToMongoDB, disconnectFromMongoDB };