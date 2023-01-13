// const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.send('Michell Herrera');
// });
// routes.get('/test', (req, res) => {
//   res.send('Carlos Martinez');
// });
// routes.get('/test2', (req, res) => {
//   res.send('Dariela Herrera');
// });

// module.exports = routes;



const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Michell Herrera');
});

app.listen(port, () => {
    console.log('Hola');
})

 