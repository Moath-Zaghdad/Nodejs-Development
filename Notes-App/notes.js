console.log('Starting notes.js');
const fs = require('fs');
const noteFile = 'notes-data.json';

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(noteFile));
    } catch (e) {
        return [];
    }
};

var saveNotes = notes => {
    fs.writeFileSync(noteFile, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var note = { title, body };
    var notes = fetchNotes();

    var duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var removeNote = title => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};
var getNote = title => {
    var notes = fetchNotes();
    return notes.filter(note => note.title === title)[0];
};
module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
};
