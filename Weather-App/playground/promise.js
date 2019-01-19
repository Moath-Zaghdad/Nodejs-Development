var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    }, 1000);
});

somePromise.then(
    message => {
        console.log('Success: ', message);
    },
    errorMessage => {
        console.log(`Error ${errorMessage}`);
    },
);

// or use catch to handle the errors
//  this way is much better.
//   when an error occurs we go to the catch directly
//   and we don't continue with the then statements
somePromise
    .then(message => {
        console.log('Success: ', message);
    })
    .catch(errorMessage => {
        console.log(`Error ${errorMessage}`);
    });

/////////////////////////////////////////////////

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') resolve(a + b);
            else reject('Arguments must be numbers');
        }, 1500);
    });
};

asyncAdd(5, 7)
    .then(res => {
        console.log('Result: ', res);
        return asyncAdd(res, 33);
    })
    .then(res => {
        console.log('Should be 45 ', res);
    })
    .catch(errorMessage => {
        console.log('CATCH ', errorMessage);
    });
