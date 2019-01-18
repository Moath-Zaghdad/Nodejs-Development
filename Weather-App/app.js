const request = require('request');
const yargs = require('yargs');
const keys = require('./keys');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        },
    })
    .help()
    .alias('help', 'h').argv;

var encodedAddress = encodeURIComponent(argv.a);

request(
    {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
            keys.mapquest
        }&location=${encodedAddress}`,
        json: true,
    },
    (err, responce, body) => {
        if (err) console.log(`Unable to connect to MapQuestAPI`);
        else if (body.info.statuscode !== 0)
            console.log(`Unable to find the address`);
        else {
            //console.log(JSON.stringify(body, undefined, 4));
            //console.log(body.results[0].locations[0]);
            console.log(body.results[0].locations[0].latLng);
            var latitude = body.results[0].locations[0].latLng.lat;
            var longitude = body.results[0].locations[0].latLng.lng;
            request(
                {
                    url: `https://api.darksky.net/forecast/${
                        keys.darksky
                    }/${latitude},${longitude}`,
                    json: true,
                },
                (err, responce, body) => {
                    if (err) console.log(`Unable to connect to Dark Sky`);
                    else console.log(body.currently.temperature);

                },
            );
        }
    },
);
