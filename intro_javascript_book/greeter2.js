let rlSync = require('readline-sync');

function getNames(firstPrompt, secondPrompt) {
  let firstName = rlSync.question(firstPrompt);
  let lastName = rlSync.question(secondPrompt);
  return `${firstName} ${lastName}`
}

let names = getNames('What is your first name? ', 'What is your last name? ');
console.log(`Hello, ${names}!`);
