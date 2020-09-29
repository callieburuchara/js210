const rlSync = require('readline-sync');
// 
// let score1 = parseInt(rlSync.question('Enter score 1: '), 10);
// let score2 = parseInt(rlSync.question('Enter score 2: '), 10);
// let score3 = parseInt(rlSync.question('Enter score 3: '), 10);
// 
// let average = (score1 + score2 + score3) / 3;
// 
// let grade = 'F';
// if (average >= 90) {
//   grade = 'A';
// } else if (average >= 70) {
//   grade = 'B';
// } else if (average >= 50) {
//   grade = 'C';
// }
// 
// console.log(`Based on the average of your 3 scores, your letter grade is "${grade}".`);

// Further Exploration

function calculateAverage(arr) {
  let length = arr.length;

  let sum = arr.reduce ((accum, current) => accum + current);
  return (sum / length);
}

function askForScores () {
  let scores = [];
  
  let score;
  while (true) {
    score = Number(rlSync.question('Enter a score: '));
    scores.push(score);
    response = rlSync.question('Would you like to add another score? (y/n) ')
    if (response === 'n') break;
  }

  return scores;
}

let scores = askForScores();
let average = calculateAverage(scores);

let grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}

console.log(`Based on the average of your 3 scores, your letter grade is "${grade}".`);
