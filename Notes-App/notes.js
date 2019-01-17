console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('adding title: ', title, ', body: ', body);
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
