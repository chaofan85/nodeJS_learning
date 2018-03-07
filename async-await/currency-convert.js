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

const convertCurrency = (from, to, amount) => {
  return getCountries(to).then((countries) => {
    return getExchangeRate(from, to);
  }).then((rate) => {
    const exchangeAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangeAmount} ${to}`;
  });
};

convertCurrency('CAD', 'USD', 100).then((status) => {
  console.log(status);
});
