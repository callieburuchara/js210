const rlSync = require('readline-sync');

console.log('Please enter a phrase:');
let phrase = rlSync.prompt();

let length = phrase.length;

console.log(`There are ${length} characters in "${phrase}".`);
