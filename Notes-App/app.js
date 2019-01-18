const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b',
        },
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
    })
    .help().argv;

var note;

switch (argv._[0]) {
    case 'read':
        note = notes.getNote(argv.title);

        if (note) console.log('note found ', note);
        else console.log('note not found');

        break;
    case 'remove':
        var isRemoved = notes.removeNote(argv.title);
        var message = isRemoved ? 'Note was remvoed' : 'Note not found';
        console.log(message);
        break;
    case 'add':
        note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log(`adding note with title: ${note.title}`);
            console.log(`and body: '${note.body}' succeeded`);
        } else {
            console.log('cannot save note!');
        }
        break;
    case 'list':
        var allNotes = notes.getAll();
        console.log(allNotes.length ? allNotes : 'no notes foubd');
        break;
    default:
        console.log('Command not recognized');
}
