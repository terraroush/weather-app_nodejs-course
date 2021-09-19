const request = require("postman-request");
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = "http://api.weatherstack.com/current?access_key=f2edd5254dec3786b413366cb5cd31fc&query=37.8267,-122.4233&units=f"


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.error) {
//         console.log("Unable to provide weather info. Check that you've provided the correct location.")
//     } else {
//         const currentWeather = response.body.current
//         console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`) 
//     }
// })

geocode("Denver", (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(39.7348, -104.9653, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
  })