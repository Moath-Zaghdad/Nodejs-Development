async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('f done!'), 300);
    });

    let result = await promise; // wait till the promise resolves (*)

    return result; // "done!"
}

f()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('catch f() ', err);
    });

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

async function x() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject('x reject!'), 300);
        });
        let res = await promise;
    } catch (err) {
        return { from: 'x() catch', Error: err };
    }
}

x().then(res => {
    console.log(res);
});

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

async function z() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject('z done!'), 302);
    });
    let res = await promise;
    return res;
}

z()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(`catch z(), ${err}`);
    });

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

Promise.all([f(), x()]).then(res => console.log(res)); // async call
console.log('END');
