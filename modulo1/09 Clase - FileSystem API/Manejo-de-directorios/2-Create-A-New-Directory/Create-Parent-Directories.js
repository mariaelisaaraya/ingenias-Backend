const fs = require('fs');
const path = require('path');
   
// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
function createDirectory(nameDirectory) {
    fs.mkdir(path.join(__dirname, nameDirectory), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
}
createDirectory('test')

// Use fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new folder.
function crearDirectorio(folderName) {
    try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
    } catch (err) {
    console.error(err);
    }
}
// Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.
const files = fs.readdirSync('./test') 
console.log(files);
