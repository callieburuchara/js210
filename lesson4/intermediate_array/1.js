function oddElementsOf(arr) {
  let oddElements = [];
  
  for (idx = 1; idx < arr.length; idx += 2) {
    finalArray.push(arr[idx]);
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]
