const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=8015%20grenfell%20street%20kew%20gardens',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
