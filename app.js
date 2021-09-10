const request = require("postman-request")

const url = "http://api.weatherstack.com/current?access_key=f2edd5254dec3786b413366cb5cd31fc&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
    const currentWeather = response.body.current
    console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`)
})