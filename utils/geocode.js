const request = require("postman-request")

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGVycmFyb3VzaCIsImEiOiJja3Rldm12eTUwMmFyMm9ubXkyZjBjc2lqIn0.saywWhSS2bchE9W5BXpqjw&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to map service!", undefined)
        } else if (response.body.message) {
            callback("Unable to provide geocode service. Check that your access code is correct.")
        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try another search.", undefined)
        } else {
            const lat = response.body.features[0].center[1]
            const long = response.body.features[0].center[0]
            const latLong = `${lat} ${long}`
            const location = response.body.features[0].place_name
            callback(undefined,{lat, long, location})
        }
    })
}

module.exports = geocode