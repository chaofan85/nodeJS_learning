console.log('starting notes.js');

const fs = require('fs');

const fetchNote = () => {
  try {
    const noteString = fs.readFileSync('note-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNote = () => {

};

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };



  let duplicateNotes = notes.filter((eachNote) => eachNote.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

module.exports = {
  addNote,
  getAll
};
