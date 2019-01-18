var square = x => x ** 2;
console.log(square(9));

var user = {
    name: 'Moath',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(`Hi. I'm ${this.name}`);
    },
    hello() {
        console.log(arguments);
    },
    helloArrow: () => {
        console.log(arguments);
    },
};

user.sayHi();
user.sayHiAlt();

console.log('');
user.hello();
user.hello(1, 2, 4);
//user.helloArrow(1, 2, 4);
