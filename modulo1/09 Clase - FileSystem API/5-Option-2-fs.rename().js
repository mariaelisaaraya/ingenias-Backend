const fs = require("fs")
const currPath = "./directory-name"
const newPath = "./new-directory-name"

fs.rename(currPath, newPath, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Successfully renamed the directory.")
  }
})

function renameDirectory(nameoldDirectory, namenewDirectory) {
   fs.rename(nameoldDirectory, namenewDirectory, err => {
  if (err) {
    console.error(err);
  }
  // done
});
}
console.log('renameDirectory', renameDirectory(newPath, currPath))
