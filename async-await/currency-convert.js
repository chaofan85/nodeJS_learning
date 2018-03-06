const axios = require('axios');

const getExchangeRate = (from, to) => {
  return axios.get(`https://api.fixer.io/latest?base=${from}`).then((response) => {
    return response.data.rates[to];
  });
};

const getCountries = (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
              .then((response) => {
                return response.data.map((country) => country.name);
              });
};

const convertCurrency = () => {

};

getCountries('CAD').then((countries) => {
  console.log(countries);
});
