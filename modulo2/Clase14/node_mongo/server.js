
// servidor 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// para evitar TypeError: Cannot read property '_id' of undefined
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// incluyo funciones declaradas en mongodb.js
const { connectToMongodb, disconnectToMongodb} = require('./src/mongodb')
//Middleware
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});
app.get('/', (req, res) => { res.status(200).end('¡Bienvenido a la API de frutas!'); } );

//Endpoints
app.get('/frutas', async (req, res) => {
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('frutas')
    const frutas = await db.collection('frutas').find().toArray()
    await disconnectToMongodb()
    res.json(frutas)
});
// Metodos de lectura
app.get('/frutas/:id', async (req, res) => {
    const frutaID = parseInt(req.params.id) || 0
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('frutas')
    const fruta = await db.collection('frutas').findOne({ id: frutaID})
    await disconnectToMongodb()
    !fruta ? res.status(404).send('No encontre la fruta con el id '+ frutaID): res.json(fruta)
});

app.get('/frutas/nombre/:nombre', async (req, res) => {
    const nombreFruta = req.params.nombre
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const regex = new RegExp(nombreFruta.toLowerCase(), 'i');
    const db = client.db('frutas')
    const frutas = await db.collection('frutas').find({ nombre: regex}).toArray()
    await disconnectToMongodb()
    frutas.length == 0 ? res.status(404).send('No encontre la fruta con el nombre '+ nombreFruta): res.json(frutas)
})

app.get('/frutas/precio/:precio', async (req, res) => {
    const precioFruta = parseInt(req.params.precio) || 0
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('frutas') 
    // gte: mayor o igual a
    const frutas = await db.collection('frutas').find({ importe: { $gte: precioFruta } }).toArray()
    await disconnectToMongodb()
    frutas.length == 0 ? res.status(404).send('No encontre la fruta con el precio '+ precioFruta): res.json(frutas)

})

// Metodo de creacion
app.post('/frutas', async (req, res) => { 
    const nuevaFruta = req.body
    if (nuevaFruta === undefined) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('frutas') 
    const collection = await db.collection('frutas').insertOne(nuevaFruta)
        .then(() => {
            console.log('Nueva fruta creada')
            res.status(201).send(nuevaFruta)
        }).catch(err => { 
            console.error(err)
        }).finally(() => { client.close()})
})

// Metodo de actualizacion
app.put('/frutas/:id', async (req, res) => { 
    const id = parseInt(req.params.id) || 0;
    const nuevosDatos = req.body
    if (!nuevosDatos) {
        res.status(400).send('Error en el formato de los datos recibidos')
    }
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('frutas') 
    // ,{hint:true} 
    const collection = await db.collection('frutas').updateOne({ id: id }, { $set: nuevosDatos })
        .then(() => {
            let mensaje ='Fruta actualizado ID : ' + id
          res.status(200).json({ descripcion: mensaje , objeto: nuevosDatos})
        }).catch(err => { 
            let mensaje = 'Error al actualizar ID: ' + id 
            console.error(err)
            res.status(500).json({descripcion : mensaje, objeto: nuevosDatos})
        }).finally(() => {
            client.close()
        })
})

// Metodo de eliminacion
app.delete('/frutas/:id', async (req, res) => { 
    const id = req.params.id;
    if (!id) {
        res.status(400).send('Error en el formato del id recibido')
    }
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    client.connect()
        .then(() => { 
            const collection = client.db('frutas').collection('frutas')
            return collection.deleteOne({id: parseInt(id)})
        }).then((resultado) => {
            if (resultado.deletedCount === 0) {
                res.status(404).send('No se pudo encontrar la fruta con id: '+id)
            } else {
                console.log('Fruta Eliminada')
                res.status(204).send('Fruta Eliminada')
            }
        }).catch((err) => {
            console.error(err)
             res.status(500).send('Error al eliminar fruta')
        }).finally(() => {
            client.close()
        })
})

app.get("*", (req, res) => {
  res.status(500).json({
    message: "No se encuentra la ruta solicitada",
  });
});

//Inicia el servidor
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );
