var express = require("express");
var router = express.Router();

/*
const fs = require("fs");
const http = require("https");
*/

router.get("/", function (req, res) {
  res.render("results");
});

/*
let filename = "something.json";
const options = {
  method: "GET",
  hostname: "documenu.p.rapidapi.com",
  port: null,
  path:
    "/restaurants/zip_code/90210?size=30&cuisine=Italian&top_cuisines=true&page=2",
  headers: {
    "x-api-key": "20f9d73a0a0f49f6ab39f1377d6728ef",
    "x-rapidapi-key": "3f69dea4f9msh991cd681eec7d1bp10d0b3jsnaa45c3604b2a",
    "x-rapidapi-host": "documenu.p.rapidapi.com",
    useQueryString: true,
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    //console.log(body.toString());
    //fs.appendFileSync(filename, body.toString());
    let obj = JSON.parse(body.toString());
    console.log(obj);
  });
});

req.end();
*/

module.exports = router;
