const request = require('request');
const API_KEY = "0a9715788710ee5fbbd990da86dae70d";

const getWeather = (lag, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${lag},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
