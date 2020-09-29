function logOddNumbers(num) {
  let range = createRange(num);
  range = range.filter(num => num % 2 != 0);
  range.forEach(num => console.log(num));
}

function createRange(highNum) {
  let range = []
  for (let start = 1; start <= highNum; start += 1) {
    range.push(start);
  }
  return range
}

logOddNumbers(19);

// Given Solution

function logOddNumbers(number) {
  for (let currentNum = 1; currentNum <= number; currentNum += 1) {
    if (currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}

// Furter Exploration 1

function logOddNumbers(number) {
  let currentNum = 1
  while (currentNum <= number) {
    console.log(currentNum);
    currentNum += 2;
  }
}


// Further Exploration 2
function logOddNumbers(number) {
  for (let currentNum = 1; currentNum <= number; currentNum += 1) {
    if (currentNum % 2 === 0) continue;
    console.log(currentNum);
  }
}
logOddNumbers(19);
