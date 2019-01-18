var person = {
    name: 'Moath',
};

debugger;
person.age = 23;

person.name = 'Zaghdad';
/**
 * $> run it via `node inspect playfround/debugging.js`
 * or
 * $> run it via `npx nodemon inspect playfround/debugging.js`
 *
 * to view more lines
 * debug> list(10)
 *
 * to run the next statement
 * debug> n
 *
 *
 * to run the rest of the program untell the `debugger;` found
 * debug> c
 *
 * to start the REPL – Read, Evaluate, Print & Loop mde
 * debug> repl
 *
 * > person
 * { name: 'Moath' }
 */

/**
 * to debug via chrome!!
 * $> node --inspect-brk playfround/debugging.js
 *
 * and open chrome 'chrome://inspect'
 */
