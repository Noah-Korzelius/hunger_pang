var express = require("express");
var router = express.Router();

//force the router to render the navigation page
router.get("/", function (req, res) {
  var origin = req.query.streetAdress;
  console.log(req.query.streetAdress);
  res.render("navigation");
});

module.exports = router;
