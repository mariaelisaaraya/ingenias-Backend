const fs = require("fs")

fs.access("./directory-name", function(error) {
  if (error) {
    console.log("Directory does not exist.")
  } else {
    console.log("Directory exists.")
  }
})