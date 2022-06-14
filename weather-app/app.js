const request = require('request');
require('dotenv').config()
const query = "27.4536733,78.23933";
const url = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_ACCESS_KEY + "&query=" + query;
request({ url: url , json: true}, (error, response) => {
    const data = response.body;
    console.log("hi user, current temprature in your city is: \n"+data.current.temperature+" and feels like: "+data.current.feelslike);
})