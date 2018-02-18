const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Chao Fan',
      age: 32
    },
    {
      name: 'Randy Zeese',
      age: 64
    },
    {
      name: 'Darryl Stephen',
      age: 59 
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
