const request = require('request');
const keys = require('../keys');

exports.getTemperature = (latitude, longitude, callback) => {
    request(
        {
            url: `https://api.darksky.net/forecast/${
                keys.darksky
            }/${latitude},${longitude}`,
            json: true,
        },
        (err, responce, body) => {
            if (err) callback(`Unable to connect to Dark Sky`);
            else if (responce.statusCode === 200)
                callback(null, body.currently.temperature);
            else callback(`Dark Sky ERROR: ${responce.statusCode} `);
        },
    );
};
