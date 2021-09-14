const request = require("postman-request")

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

const latLongUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVycmFyb3VzaCIsImEiOiJja3Rldm12eTUwMmFyMm9ubXkyZjBjc2lqIn0.saywWhSS2bchE9W5BXpqjw&limit=1"

request({ url: latLongUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to map service!")
    } else if (response.body.message) {
        console.log("Unable to provide geocode service. Check that your access code is correct.")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location. Try another search.")
    } else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        const latLong = `${lat} ${long}`
        console.log(latLong)
    }
    
})