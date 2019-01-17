console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

console.log(_.isString(true));
console.log(_.isString('Moath'));

console.log(_.uniq(['a', 'A', 1, 2, 'a', 'A', 1, 1, 2]));

// console.log('Result: ', notes.add(8, 7));

/*
const user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}!`, err => {
    if (err) console.log('Unable to write to file');
});
*/
