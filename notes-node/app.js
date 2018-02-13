console.log("Starting app.");

const fs = require('fs');
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
      .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
      })
      .command('list', 'List all notes')
      .command('read', 'Read a note', {
        title: titleOptions
      })
      .command('remove', 'Remove a note', {
        title: titleOptions
      })
      .help()
      .argv;

const command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(note);
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  allNotes.forEach((note) => console.log(note));
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log(note);
  }  else {
    console.log("note not found");
  }
} else if (command === 'remove') {
  notes.removeNote(argv.title);
}
