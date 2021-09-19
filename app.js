const request = require("postman-request");
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode("Denver", (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})

forecast(39.7348, -104.9653, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
  })