var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

var index = require("./routes/index");
var results = require("./routes/results");

app.use("/", index);
app.use("/results", results);

app.listen(8084);
