const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hello this is my first web server');
});

module.exports = routes;

 