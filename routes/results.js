var express = require("express");
var router = express.Router();
//var fs = require("fs");

const documenu = require("documenu");
documenu.configure("20f9d73a0a0f49f6ab39f1377d6728ef");

//this determines how much information will be presenteted to a user
const defaultParams = {
  size: 3,
  page: 1,
  fullmenu: true,
};

router.get("/", function (req, res) {
  //reads all the data that is within a zip code provided by a user
  documenu.Restaurants.getByZipCode(req.query.zipCode, defaultParams).then(
    (result) => {
      //store all results from previous query inside a variable
      var restaurants = result.data;
      //const jsonString = JSON.stringify(restaurants, 2, 2);
      //fs.writeFile("./data.json", jsonString, () => {});
      //console.log(restaurants);
      //go and check each restaurant to see if their menu contains the entree

      //Render the results page with all of the data
      res.render("results", {
        allRestaurants: restaurants,
        len: restaurants.length,
      });
    }
  );
});

module.exports = router;
