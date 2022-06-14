const request = require('request');
require('dotenv').config()


// Weather stack public api
// Accept long/lat and return weather report for location.
const query = "27.4536733,78.23933";
const url = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_ACCESS_KEY + "&query=" + query;
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Not able to connect to weather stack api")
    }
    else if (response.body.error) {
        console.log("Not able to fetch data !!")
    }
    else {
        const data = response.body;
        console.log("hi there, current temprature in your city is: \n" + data.current.temperature + " and feels like: " + data.current.feelslike);
    }
})



// print lat/long using mapbox-api 
// The Geocoding API allows you to search for addresses and places by name or coordinates.
const searchPlace = "Agra India";
const geocodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/{"+searchPlace+"}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=" + process.env.YOUR_MAPBOX_ACCESS_TOKEN;
request({ url: geocodingUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Not able to connect to weather stack api")
    }
    else if (response.body.error) {
        console.log("Not able to fetch data !!")
    }
    else {
        const data = response.body;
        console.log("data is: ", data.features[0]);
    }
})
    
    