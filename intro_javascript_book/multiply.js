function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let firstNum = getNumber('Enter the first number: ');
let secondNum = getNumber('Enter the second number: ');
console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
