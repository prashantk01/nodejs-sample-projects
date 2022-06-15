require('dotenv').config()
const mapboxGeoCode= require('./utils/mapbox-geocode');
const weatherStackForeCast = require('./utils/weather-stack-forecast');



// Hit Mapbox API with address And Get location co-ordinates and get weather details with lat/long.
// const address = "Nagla Mitan Jalesar Etah India";
const address = process.argv[2];
if (!address) {
    console.log("Oops !! Missing argument ")
}
else {
    mapboxGeoCode(address, (error, geoData) => {
        if (error)
            return console.log(error);
        weatherStackForeCast(geoData.latitude, geoData.longitude, (error, data) => {
            if (error)
                return console.log(error);
            console.log(geoData.placeName);
            console.log("It's ", data.weatherDescription, " out there");
            console.log("Current temperature is ", data.temperature, "C");
            console.log("There is ", data.precip, " % of rain outside");
            console.log("Visibility is ", data.visibility);
        })

    })
}

