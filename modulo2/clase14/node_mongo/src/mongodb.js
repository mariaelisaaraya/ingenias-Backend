const dotenv = require('dotenv');
dotenv.config()
// config db
const { MongoClient } = require('mongodb')
const URL = process.env.MONGODB_URLSTRING || ""
const client = new MongoClient(URL,  {
    // @ts-ignore
    useNewUrlParser: true
})
// functions js convencional
async function connectToMongodb() { 
    try {
        await client.connect()
        console.log('Conectado a mongoDB')
        return client
    } catch (error) {
        console.log('Error al conectarse a mongoDB: ' + error)
        return null
    }
}
// arrow functions
const disconnectToMongodb = async () => { 
    try {
        await client.close()
        console.log('Desconectado de mongoDB')
    } catch (error) {
        console.log('Error al desconectarse de mongoDB: ' + error)
    }
}
module.exports ={ connectToMongodb, disconnectToMongodb}