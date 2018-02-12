console.log("Starting app.");

const fs = require('fs');
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

const argv = yargs.argv;

const command = process.argv[2];

console.log(argv);

if (command === 'add') {
  console.log('Adding new note');
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(note);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  console.log(notes.getNote(argv.title));
} else if (command === 'remove') {
  notes.removeNote(argv.title);
}
