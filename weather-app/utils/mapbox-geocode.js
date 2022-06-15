
const request = require('request');
require('dotenv').config()

// mapbox-api 
// The Geocoding API allows you to search for addresses and places by name or coordinates.
const mapboxGeoCode = (address, callback) => {
const geocodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/{"+address+"}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=" + process.env.YOUR_MAPBOX_ACCESS_TOKEN;
    request({ url: geocodingUrl, json: true }, (error, response) => {
        if (error) {
            // console.log("Not able to connect to mapbox geocoding api")
            callback('Not able to connect to mapbox geocoding api', undefined);
        }
        else if (response.body.error) {
            // console.log("Not able to fetch data !!")
            callback('Not able to fetch data !! try another search', undefined);
        }
        else {
            const data = response.body;
            const latitude = data.features[0].center[1];
            const longitude = data.features[0].center[0];
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                placeName: data.features[0].place_name,
            })
        }
    })
}

    
module.exports = mapboxGeoCode;