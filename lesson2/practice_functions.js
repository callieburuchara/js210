// EXERCISE 1

// function average(a, b, c) {
//   return (a + b + c) / 3;
// }

// console.log(average(5, 10, 3));

// EXERCISE 2

// function sum(a, b, c) {
//   return (a + b + c);
// }
// 
// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }
// 
// console.log(average(5, 10, 3));

// EXERCISE 3

// function average() {
//   let total = 0;
// 
//   for (let index = 0; index < arguments.length ; index += 1) {
//     total += arguments[index];
//   }
// 
//   return (total) / arguments.length;
// }
// 
// console.log(average(5, 2, 6, 7, 8, 9, 10));

// EXERCISE 4

function sum(values) {
  let total = 0
  
  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }

  return total;
}

function average(values) {
  let total = sum(values);
  return total / values.length;
}

// console.log(average([3, 3, 8, 3, 3]));

// EXERCISE 5

let temperatures = [65, 72, 73, 61, 55]
console.log(average(temperatures));
