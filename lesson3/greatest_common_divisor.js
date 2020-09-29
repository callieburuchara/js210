function gcd(num1, num2) {
  let smaller = (num1 < num2 ? num1 : num2);
  let divisors = [];
  for (let num = 1; num <= smaller; num += 1) {
    if (num1 % num === 0 && num2 % num === 0) divisors.push(num);
  }
  console.log(divisors);
  return divisors.pop();
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));

// Using Euclid's algorithm

function euclidGcd(num1, num2) {
  let bigger;
  let smaller;
  if (num1 > num2) {
    bigger = num1;
    smaller = num2 
  } else {
    bigger = num2;
    smaller = num1;
  }
  
  let remainder = smaller;
  while (remainder !== 0) {
    remainder = bigger / smaller;
    
  }


}
