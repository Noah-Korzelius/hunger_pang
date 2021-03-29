var express = require("express");
var router = express.Router();


//const fs = require("fs");
const http = require("https");


router.get("/", function (req, res) {
  res.render("results");
});


module.exports = router; 