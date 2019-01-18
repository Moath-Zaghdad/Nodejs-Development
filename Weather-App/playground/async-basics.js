console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 200);

setTimeout(() => {
    console.log('Inside of second callback');
}, 0);

console.log('Finishing up');
