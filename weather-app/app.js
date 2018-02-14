const request = require('request');

const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//     .options({
//       a: {
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch weather for',
//         string: true
//       }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const API_KEY = "0a9715788710ee5fbbd990da86dae70d";
const argv = yargs
    .options({
      lag: {
        demand: true,
        alias: "latitude",
      },
      lng: {
        demand: true,
        alias: "longitude"
      }
    })
    .argv;

request({
  url: `https://api.darksky.net/forecast/${API_KEY}/${argv.lag},${argv.lng}`,
  json: true
}, (error, response, body) => {
  console.log(`Temperature: ${body.currently.temperature}`);
});
