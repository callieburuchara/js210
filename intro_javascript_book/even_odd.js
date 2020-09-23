function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('This is not a number!');
    return;
  }  

  if (num % 2 === 0) {
    console.log('This number is even!');
  }  else {
    console.log('This number is odd!');
  }
}

evenOrOdd(5)
evenOrOdd(10)
evenOrOdd('hi')
