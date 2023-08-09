const fs = require("fs")

async function listarConReaddir(nameDirectory) {
    fs.readdir(nameDirectory, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('obtenerLosArchivosDelDirectorio', result);
        return result;
    }) 
}
listarConReaddir('./directory-name')
function listarConReaddirSync() {
    try {
    const arrayOfFiles = fs.readdirSync("./directory-name")
    console.log('listarConReaddir',arrayOfFiles)
    } catch(e) {
    console.log(e)
    } 
}
listarConReaddirSync()
 