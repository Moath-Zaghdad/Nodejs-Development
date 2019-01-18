const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');
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
geocode.getAddress(argv.address, (err, res) => {
    if (err) console.log(err);
    else
        weather.getTemperature(res.lat, res.lng, (err, res) => {
            if (err) console.log(err);
            else console.log(`The Temperature now in ${argv.address} is ${res}`);
        });
});
