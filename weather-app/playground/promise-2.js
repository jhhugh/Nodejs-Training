
const request = require('request');


var geocodeAddress = (address) => {
    return new Promise((resolve, reject) =>{
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDO188OFQXh1On4yNJzmno1EKAvTIuoBsw`,
            json: true
            }, (error, response, body) => {
                if(error){
                    reject('Unable to connect to Google servers.')
                }else if(body.status === 'ZERO_RESULTS'){
                    reject('Cannot find address')
                }else if(body.status === 'OK'){
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                }
            });
        });
};

geocodeAddress('19164').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
});