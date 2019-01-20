const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.status(400).send({ errorMessage: 'Unanble to handle request' });
});

app.listen(3000);
