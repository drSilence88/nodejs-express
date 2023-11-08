const { log } = require('console');
const request = require('postman-request');

const geocode = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3c2793d8881d1e8524355396b77181a1&query=" + address + "&units=f"

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to the server", undefined)
        } else if (response.body.current.location === 0) {
            console.log("Unable to find location", undefined)
        } else { 
            callback(undefined, {
                lat: response.body.location.lat,
                lon: response.body.location.lon,
                location: response.body.location
            })
        }
    })
}

module.exports = geocode
