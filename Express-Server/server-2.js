const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});

console.log(`go to localhost:3000/help.html`);
