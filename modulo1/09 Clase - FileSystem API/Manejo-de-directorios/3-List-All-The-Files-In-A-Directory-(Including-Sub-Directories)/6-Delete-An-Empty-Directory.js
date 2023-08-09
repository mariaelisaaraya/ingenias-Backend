const fs = require("fs")

fs.rmdir("./directory-name", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Directory was deleted.")
  }
})
