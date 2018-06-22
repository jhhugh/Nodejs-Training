const request = require('request');


var getWeather = (lat,lng, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/064d6c0bd0eb6e061ce207e1b6d28ac0/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                Temp: body.currently.temperature,
                Feels: body.currently.apparentTemperature
            })
        }else {
            callback('Unable to fetch weather');
        }
    }
    );
}

module.exports.getWeather = getWeather;


