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
            console.log(body.results[0].locations[0]);
            console.log('');
            console.log(body.results[0].locations[0].latLng);
        }
    },
);
