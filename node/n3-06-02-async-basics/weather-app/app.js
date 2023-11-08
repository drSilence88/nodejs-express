const request = require('postman-request')
const geocode = require('./geocode')
const forecast = require("./forecast")

geocode('Boston', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

forecast(40.714, -74.006, "New York", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})


