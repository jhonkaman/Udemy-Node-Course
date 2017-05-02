console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// Using lodash module
console.log(_.isString(true));
console.log(_.isString('Javier'));

var filteredArray = _.uniq(['Javier', 1, 'Javier', 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);

// My Challenge Solution
// var add = notes.add(9, -2);
// console.log(add);

// Alternative Solution
// console.log('Result: ', notes.add(9,-2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
