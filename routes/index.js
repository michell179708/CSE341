const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Michell Herrera');
});
routes.get('/test', (req, res) => {
  res.send('Dariela Herrera');
});
routes.get('/testdos', (req, res) => {
  res.send('Carlos Martinez');
});

module.exports = routes;

 