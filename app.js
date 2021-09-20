const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const city = process.argv[2]

if (!city) {
    return console.log("Please run program with a city")
} else {
    geocode(city, (error, data) => {

        if (error) {
            return console.log(error)
        }

        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}


