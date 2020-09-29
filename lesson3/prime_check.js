// create a function called isPrime
// takes one argument
// return false if the number is 1
// return true if the number is 2
// otherwise, use a for loop
// - starting at the number 2
// - until the number is one less than the input
// - return false if the numer is divisble by any of those numbers at any time
// - if all runs smoothly, return true at the end

function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  for (let current = 3; current < number; current += 2) {
    if (number % current === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
