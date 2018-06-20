console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var add = notes.add(7,8);
console.log(add);
// var user = os.userInfo();


// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
