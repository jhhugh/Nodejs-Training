const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);

    if(note == null){
        console.log('Cannot add notes with the same title');
    }else{
        console.log('Note successfully added');
        notes.logNote(note);
    }
}else if(command == 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command == 'read'){
    var note = notes.getNote(argv.title);

    if(note == null){
        console.log('Cannot find note');
    }else{
        console.log('Note read');
       notes.logNote(note);
    }

}else if(command == 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else{
    console.log('Command not recognized');
}


