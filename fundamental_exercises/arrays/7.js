function shift(arr) {
  if (arr.length === 0) return undefined;

  let deleted = arr[0];
  let newLength = arr.length - 1;
  
  for (idx = 1; idx < arr.length ; idx += 1){
    arr[idx - 1] = arr[idx];
  }
  arr.length = newLength;
  return deleted;
}

//

function unshift(arr, ...args) {
  let counter = 0;
  
  while (counter < args.length) {
    for (idx = arr.length; idx > 0; idx -= 1) {
      arr[idx] = arr[idx - 1];
    }
    counter += 1;
  }

  for (let idx = 0; idx < args.length; idx += 1) {
    arr[idx] = args[idx];
  }

  return arr.length;
}

// Test Cases

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
 
console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3
 
const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]




// Much better unshift method using splice:
function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}
