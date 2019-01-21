const fs = require('fs');
const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
    console.log('middleware 1');
    var now = new Date().toString();

    next();

    setTimeout(() => { console.log(`TimeOut finished in 1`);}, 500);
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('middleware.log', log + '\n', err => {
        if (err) throw err;
        console.log('The "' + log + '" was appended to file!');
    });
    console.log('middleware 1 finished');
});

app.use((req, res, next) => {
    console.log('middleware 2');


    setTimeout(() => { console.log(`TimeOut finished in 2`);}, 1000);
    console.log('middleware 2 finished');
    next();
});
app.use((req, res, next) => {
    console.log('middleware 3!!');
    next();
});
console.log(`End of the middlewares!`);
app.get('/', (req, res) => {
    res.send('Hellow!');
});
app.listen(3000);
