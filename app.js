var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

var index = require("./routes/index");
var results = require("./routes/results");
var navigation = require("./routes/navigation");

app.use("/", index);
app.use("/results", results);
app.use("/navigation", navigation);

app.listen(8084);
