const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello' });
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});
module.exports.app = app;
