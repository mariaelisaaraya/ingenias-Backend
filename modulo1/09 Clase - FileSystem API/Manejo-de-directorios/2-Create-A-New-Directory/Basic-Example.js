const fs = require("fs")

fs.mkdir("./new-directory-name", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})