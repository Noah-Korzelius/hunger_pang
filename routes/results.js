var express = require("express");
var router = express.Router();
var restaurant = require("../models/restaurant");
var location = require("../models/location");
var fs = require("fs");

const documenu = require("documenu");
documenu.configure("20f9d73a0a0f49f6ab39f1377d6728ef");

//this determines how much information will be presenteted to a user
const defaultParams = {
  size: 200,
  pages: 10,
  fullmenu: true,
};

router.get("/", function (req, res) {
  if (
    req.query.streetAdress === "" ||
    req.query.zipCode === "" ||
    req.query.searchTag === ""
  ) {
    res.redirect("/");
  }
  //creates variable storing users address
  const userAddress = req.query.streetAdress;

  //reads all the data that is within a zip code provided by a user
  documenu.Restaurants.getByZipCode(req.query.zipCode, defaultParams).then(
    (result) => {
      //store all results from previous query inside a variable
      var restaurants = result.data;

      //test code

      //const jsonString = JSON.stringify(restaurants, 2, 2);
      //fs.writeFile("./data.json", jsonString, () => {});
      //console.log(restaurants);
      //go and check each restaurant to see if their menu contains the entree

      var eRestaurants = [];
      var numHits = 0;
      //loop through all of the restaurants in a zip
      for (var x = 0; x < restaurants.length; x++) {
        if (
          restaurants[x].restaurant_name
            .toLowerCase()
            .includes(req.query.searchTag.toLowerCase())
        ) {
          numHits += 5;
        }
        //loop through all of the menus for a specific restaurant
        for (var y = 0; y < restaurants[x].menus.length; y++) {
          if (
            restaurants[x].menus[y].menu_name
              .toLowerCase()
              .includes(req.query.searchTag.toLowerCase())
          ) {
            numHits += 4;
          }
          //loop through all the sections on for a menu
          for (
            var i = 0;
            i < restaurants[x].menus[y].menu_sections.length;
            i++
          ) {
            if (
              restaurants[x].menus[y].menu_sections[i].section_name
                .toLowerCase()
                .includes(req.query.searchTag.toLowerCase())
            ) {
              numHits += 3;
            }
            //loop through all of the items
            for (
              var j = 0;
              j < restaurants[x].menus[y].menu_sections[i].menu_items.length;
              j++
            ) {
              //check to see if the search tag is in the entree's name
              if (
                restaurants[x].menus[y].menu_sections[i].menu_items[
                  j
                ].name.includes(req.query.searchTag.toLocaleLowerCase())
              ) {
                numHits++;
              }
            }
          }
        }
        //code here
        //console.log(numHits);
        //if there are hits or the search is the name of the restaurant, create an object of it
        if (numHits > 0) {
          eRestaurants.push(
            new restaurant(
              restaurants[x].restaurant_name,
              restaurants[x].price_range,
              restaurants[x].restaurant_phone,
              restaurants[x].restaurant_website,
              numHits,
              restaurants[x].address.formatted
            )
          );

          //check for null fields
          if (eRestaurants[eRestaurants.length - 1].price === "") {
            eRestaurants[eRestaurants.length - 1].price = "NA";
          }
          if (eRestaurants[eRestaurants.length - 1].phone === "") {
            eRestaurants[eRestaurants.length - 1].phone === "";
          }
          if (eRestaurants[eRestaurants.length - 1].website === "") {
            eRestaurants[eRestaurants.length - 1].website = "NA";
          }
          //reset checks for next restaurant
          numHits = 0;
        }
      }

      //console.log(eRestaurants);

      //Render the results page with all of the data
      res.render("results", {
        allRestaurants: eRestaurants,
        len: eRestaurants.length,
        address: userAddress,
      });
    }
  );
});

module.exports = router;
