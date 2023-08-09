const fs = require('fs')

function crearArchivo(nombre, contenido) {
    if (!existeArchivo(nombre)) {
        fs.writeFile(nombre, contenido.trim(), function (error) {
            if (error) throw error;
            console.log('Saved!');
        })
    } else {
       console.log("No puede sobreescribir el archivo:  " + nombre) 
    }
}
//crearArchivo("archiv2.txt","Hola, chicas")

function existeArchivo(nombre) {
    return fs.existsSync(nombre.trim())
}
//console.log(existeArchivo('miPrimerArchivo.txt'))

function leerArchivo(nombre) {
    fs.readFile(nombre,'utf-8', (error, data)=> {
        if (error) {
          console.error(error)
        } else {
           console.log(data) 
        }
    })
}
//leerArchivo("archiv2.txt")

function reescrbirArchivo(file, content) {
    fs.appendFile(file.trim(), content, (error, data) => {
        if (error) {
            console.error(error)
            return
        } else {
           console.log("Se agrego el contenido a tu archivo: ", file) 
        }
    })
}
//reescrbirArchivo("archiv2.txt", "\nlalalala                               sasasasas")

function borrarArchivo(file) {
    if (!existeArchivo(file)) {
        fs.unlink(file.trim(), (error) => {
            if (error) {
                console.error(error)
                return
            }
            console.log("Se borro correctamente el archivo: ", file)
        })
    }
}
borrarArchivo("miPrimerArchivo.txt")
