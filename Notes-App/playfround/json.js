var obj = {
    name: 'Moath',
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "moath", "age": 23}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);


