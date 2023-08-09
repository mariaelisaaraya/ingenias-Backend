const fs = require("fs")

try {
  if (fs.existsSync("./directory-name")) {
    console.log("Directory exists.")
  } else {
    console.log("Directory does not exist.")
  }
} catch(e) {
  console.log("An error occurred.")
}