let express = require("express");
let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

let index = require("./src/index");
let connections = require("./src/connections");

app.use("/", index);
app.use("/connections", connections);

app.listen(8084);