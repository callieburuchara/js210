const rlSync = require('readline-sync');
const PASSWORD = 'password';
let guesses = 0
let attempt = ''

while (guesses < 3) {
  attempt = rlSync.question('What is the password: ');
  if (attempt === PASSWORD) break;
  guesses += 1;
}

if (guesses === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}
