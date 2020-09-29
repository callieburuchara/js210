function multiplesOfThreeAndFive() {
  for (let currentNum = 1; currentNum <= 100; currentNum += 1) {
    if ((currentNum % 3 === 0) && (currentNum % 5 === 0)) {
      console.log(String(currentNum) + '!');
    } else if ((currentNum % 3 === 0) || (currentNum % 5 === 0)) {
      console.log(String(currentNum));
    } else continue;
  }
}

// multiplesOfThreeAndFive();

// Further Exploration

function multiplesOfThreeAndFive(startNum, endNum) {
  for (let number = startNum; number <= endNum; number += 1) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      console.log(String(number) + '!');
    } else if ((number % 3 === 0) || (number % 5 === 0)) {
      console.log(String(number));
    } else continue;
  }
}

multiplesOfThreeAndFive(1, 20);
