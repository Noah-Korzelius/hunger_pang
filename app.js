let express = require("express");
let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/results", function (req, res) {
  res.render("results");
});

app.listen(8084);
