const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0eda6037cc0bf299bf3f05962943dd70/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log(body.daily.data)
            callback(undefined, 
                    body.daily.data[0].summary 
                    + ' It is currently ' + body.currently.temperature 
                    + ' degress out. There is a ' + body.currently.precipProbability 
                    + '% chance of rain.'
                    + ' The high today is ' +  body.daily.data[0].temperatureHigh
                    + ' The low today is ' +  body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast