console.log('Starting notes.js');
const fs = require('fs');
const noteFile = 'notes-data.json';

var addNote = (title, body) => {
    var notes;
    try {
        notes = JSON.parse(fs.readFileSync(noteFile));
    } catch (e) {
        notes = [];
    }

    var duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body,
        });
        fs.writeFileSync(noteFile, JSON.stringify(notes));
        console.log('adding title: ', title, ', body: ', body);
    } else {
        console.log('note with the title ', title, ' already exists!');
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var removeNote = title => {
    console.log('Remove note: ', title);
};
var getNote = title => {
    console.log('Getting note: ', title);
};
module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
};
