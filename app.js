const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const city = process.argv[2]

if (!city) {
    return console.log("Please run program with a city")
} else {
    geocode(city, (error, { lat, long, location } = {}) => {

        if (error) {
            return console.log(error)
        }

        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}


