const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const placeRouter = express.Router();

const key = "AIzaSyB4xKzJFY5galXMYqw9p6xIG6pHPFFBcqM";
var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + key;
placeRouter.use(bodyParser.json());
const request = require('request');
placeRouter.route('/').get((req, res, next) => {
  

  https.get(url, function(response) {
    var body ='';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var places = JSON.parse(body);
      var locations = places.results;
      var randLoc = locations[Math.floor(Math.random() * locations.length)];

      res.json(randLoc);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

 

})

module.exports = placeRouter;