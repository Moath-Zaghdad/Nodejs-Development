console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const argv = yargs.argv;

switch (argv._[0]) {
    case 'read':
        notes.getNote(argv.title);
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    default:
        console.log('Command not recognized');
}
