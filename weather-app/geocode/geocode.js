const request = require('request');


var geocodeAddress = (address, callback) =>{
    var encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDO188OFQXh1On4yNJzmno1EKAvTIuoBsw`,
    json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google servers.')
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Cannot find address')
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
});
}

module.exports = {
    geocodeAddress
};