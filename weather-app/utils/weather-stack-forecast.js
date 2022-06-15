const request = require('request');
require('dotenv').config()

// Weather stack public api
// Accept long/lat and return weather report for location.
const weatherStackForeCast = (lat, long, callback) => {
    const query = lat.toString() +","+ long.toString();
    const url = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_ACCESS_KEY + "&query=" + query;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            // console.log("Not able to connect to weather stack api");
            callback('Not able to connect to weather stack forecast api', undefined);

        }
        else if (response.body.error) {
            // console.log("Not able to fetch data !!");
            callback('Not able to fetch data !! try another search', undefined);

        }
        else {
            const data = response.body;
            callback(undefined, {
                temperature: data.current.temperature,
                feelslikeTemperature: data.current.feelslike,
                weatherDescription: data.current.weather_descriptions[0],
                precip: data.current.precip,
            })
        }
    })
}
    
module.exports = weatherStackForeCast;