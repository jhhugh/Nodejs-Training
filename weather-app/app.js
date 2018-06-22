const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=13560%20Morris%20Road%20Atlanta',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});