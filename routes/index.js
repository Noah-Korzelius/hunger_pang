//import router and express
var express = require("express");
var router = express.Router();

//have the router force the index page to render
router.get("/", function (req, res) {
  res.render("index");
});

//have the router force the about page to render
router.get("/about", function (req, res) {
  res.render("about");
});

//have the router force the contact page to render
router.get("/contact", function (req, res) {
  res.render("contact");
});

module.exports = router;
