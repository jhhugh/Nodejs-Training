console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');



console.log(_.isString(true));
console.log(_.isString('Andrew'));


// var add = notes.add(7,8);
// console.log(add);
// var user = os.userInfo();

var filteredArray = _.uniq(['Jimmy', 1, 'Jimmy', 1, 2,3,4]);
console.log(filteredArray);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
