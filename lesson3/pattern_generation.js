// function generatePattern: takes one argument: nStars 
// that nStars is the number of rows I'm aiming for
// So first row is 1 + nStars - 1 amount of stars
// Second row is 2 + nStars - 2 amount of stars

// accept argument of nStars
// for loop: current is nStars , until current is less than 0, current 

function generatePattern(nStars) {
  let number = '';

  for (let current = 1; current <= nStars; current += 1) {
    number = number += String(current);
    console.log(String(number) + '*'.repeat(nStars - current));

  }
}

//generatePattern(7);

// Further Exploration

function generatePattern(nStars) {
  let number = '';
  let lastRowString = '';
  
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;
  console.log(width);


  for (let current = 1; current <= nStars; current += 1) {
    number = number += String(current);

    repeatAmount = width - current

    console.log(String(number) + '*'.repeat(repeatAmount));

  }
}



generatePattern(20);
// It doesn't look right, but the amount of characters is right in the output
