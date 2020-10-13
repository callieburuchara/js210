// accept an array of numbers
// create a missingNumbers = []
// the first element is the start
// the last element is the end
// using a for loop, iterate through each
// if the next number isn't 1 more than the current number, add the current number + 1 to the missing Numbers array
// return the missing numbers array at the end

function missing(arr) {
  let missingNumbers = [];
  let end = arr[arr.length - 1];

  for (let current = arr[0]; current < end; current += 1) {
    if (!arr.includes(current)) {
      missingNumbers.push(current);
    }
  }

  return missingNumbers;
}

console.log(missing([-3, -2, 1, 5]));             // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));               // []
console.log(missing([1, 5]));                     // [2, 3, 4]
console.log(missing([6]));                        // []
