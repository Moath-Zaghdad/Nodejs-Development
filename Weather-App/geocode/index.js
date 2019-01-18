const request = require('request');
const keys = require('../keys');

exports.getAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request(
        {
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
                keys.mapquest
            }&location=${encodedAddress}`,
            json: true,
        },
        (err, responce, body) => {
            if (err) callback(`Unable to connect to MapQuestAPI`);
            else if (body.info.statuscode !== 0)
                callback(`Unable to find the address`);
            else {
                //console.log(JSON.stringify(body, undefined, 4));
                //console.log(body.results[0].locations[0]);
                //console.log(body.results[0].locations[0].latLng);
                callback(null ,body.results[0].locations[0].latLng);
                var latitude = body.results[0].locations[0].latLng.lat;
                var longitude = body.results[0].locations[0].latLng.lng;
            }
        },
    );
};
