const fs = require("fs")

async function listarConReaddir(nameDirectory) {
    fs.readdir(nameDirectory, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('listarConReaddir', result);
        return result;
    }) 
}
listarConReaddir("./test")
function listarConReaddirSync(nameDirectory) {
    try {
    const arrayOfFiles = fs.readdirSync(nameDirectory)
    console.log('listarConReaddirSync',arrayOfFiles)
    } catch(e) {
    console.log(e)
    } 
}
listarConReaddirSync("./test")
 