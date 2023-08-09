const fs = require("fs")
// acceso si exist
function existDirectoryOp1(ruta) {
    fs.access(ruta, function(error) {
    if (error) {
        console.log("Directory does not exist op1.")
    } else {
        console.log("Directory exists op1.")
    }
    })
}
existDirectoryOp1("./menu")

function existDirectoryOp2(ruta) {
    try {
        if (fs.existsSync(ruta)) {
            console.log("Directory exists op2.")
        } else {
            console.log("Directory does not exist op2.")
        }
    } catch(e) {
     console.log("An error occurred.")
    }
}
existDirectoryOp2("./menu")

function createDirectory(name) {
    fs.mkdir(name, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
    })
}
//createDirectory("./test/prueba1")


// Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.
const files = fs.readdirSync('./test') 
console.log(files);
