const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${
    keys.mapquest
}&location=${encodedAddress}`;

axios
    .get(geocodeURL)
    .then(res => {
        console.log(res.data.results[0].locations[0].latLng);
        var latitude = res.data.results[0].locations[0].latLng.lat;
        var longitude = res.data.results[0].locations[0].latLng.lng;
        const darkskyURL = `https://api.darksky.net/forecast/${
            keys.darksky
        }/${latitude},${longitude}`;
        return axios.get(darkskyURL);
    })
    .then(res => {
        if (res.status === 200) console.log(res.data.currently.temperature);
        else callback(`Dark Sky ERROR: ${responce.statusCode} `);
    })
    .catch(e => {
        console.log('ERROR: ', e.message);
    });
