const utils = require('./utils');

it('Should add two numbers', () => {
    var res = utils.add(7.5, 992.4);
    if (res != 999.9) throw new Error(`Expected 999.9, but got ${res}`);
});

it('Should square a number', () => {
    var res = utils.sqr(4);
    if (res != 16) throw new Error(`Expected 16, but got ${res}`);
});
