var express = require("express");
var app = express();

//specify the views as .ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

//set the specific .ejs files for each view
var index = require("./routes/index");
var results = require("./routes/results");
var navigation = require("./routes/navigation");

app.use("/", index);
app.use("/results", results);
app.use("/navigation", navigation);

//start the app on port 8084
app.listen(8084);
