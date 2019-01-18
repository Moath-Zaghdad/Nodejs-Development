var getUserSync = (id, callback) => {
    var user = {
        id,
        name: 'Moath',
    };
    callback(user);
};

getUserSync(50, user => {
    console.log(user);
});

var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Moath',
    };
    setTimeout(() => {
        callback(user);
    });
};

getUser(50, user => {
    console.log(user);
});

console.log('End');
