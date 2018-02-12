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

const saveNote = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNote();
  const note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((eachNote) => eachNote.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = (title) => {
  const notes = fetchNote();
  return notes.filter((note) => note.title === title);
};

const removeNote = (title) => {
  const notes = fetchNote();
  const newNotes = notes.filter((note) => note.title !== title);
  saveNote(newNotes);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
