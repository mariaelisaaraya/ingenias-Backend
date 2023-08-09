const fs = require("fs")


const currPath = "./directory-name"
const newPath = "./new-directory-name"

try {
  fs.renameSync(currPath, newPath)
  console.log("Successfully renamed the directory.")
} catch(err) {
  console.log(err)
}


async function example(nameoldDirectory, namenewDirectory) {
 try {
  fs.renameSync(nameoldDirectory, namenewDirectory);
} catch (err) {
  console.error(err);
}
}
example(newPath, currPath);