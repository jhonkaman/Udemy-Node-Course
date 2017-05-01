console.log('Starting notes.js');

//console.log(module);

//module.exports.age = 24;

// Old function syntax
// module.exports.addNote = function () {
//
// }

// New arrow function syntax
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

// Challenge
module.exports.add = (a,b) => {
  return a + b;
};
