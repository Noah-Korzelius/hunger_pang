var express = require("express");
var router = express.Router();

const documenu = require("documenu");
documenu.configure("20f9d73a0a0f49f6ab39f1377d6728ef");

const defaultParams = {
  size: 3,
  page: 1,
  fullmenu: false,
};

router.get("/", function (req, res) {
  documenu.Restaurants.getByZipCode(req.query.zipCode, defaultParams).then(
    (result) => {
      var restaurants = result.data;
      res.render("results", {
        allRestaurants: restaurants,
        len: restaurants.length,
      });
    }
  );
});

module.exports = router;
