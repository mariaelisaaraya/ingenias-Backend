const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./app/config/config.js");

const app = express();

const corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync().then(() => {
  initial(); // Just use it in development, at the first time execution!. Delete it in production
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this tutorial." });
});

// api routes
require("./app/routes/book.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


roles = [{
    id: 1,
    name: "user"
}, {
    id: 2,
    name: "moderator"
}, {
    id: 3,
    name: "admin"
}]
// Just use it in development, at the first time execution!. Delete it in production
function initial() {
  roles.forEach(rol => {
    console.log("==========>",rol)
    Role.findOrCreate({
      where: {id: rol.id},
      defaults: {
            id: rol.id,
            name: rol.name,
      }
    }).then((rolRow, isCreated) => {
    if(isCreated){
          //user created
          console.log('creted rol', rolRow);
      }
    });
  })

}
