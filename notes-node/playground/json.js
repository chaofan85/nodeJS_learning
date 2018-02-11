// const obj = {
//   name: "Chao"
// };
//
// const stringObj = JSON.stringify(obj);

const fs = require('fs');

const originalNote = {
  title: "Some title",
  body: "Some body"
};

const originalNoteString = JSON.stringify(originalNote);
// console.log(typeof originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(note);
