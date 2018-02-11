console.log("Starting app.");

const fs = require('fs');
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

const argv = yargs.argv;

const command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
}
