const fs = require("fs")

fs.rmdir("./menu", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Directory was deleted.")
  }
})

