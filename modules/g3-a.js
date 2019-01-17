console.log('a starting');
exports.done = false;
const b = require('./g3-b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
