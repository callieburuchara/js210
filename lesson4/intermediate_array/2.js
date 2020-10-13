function originalAndReverse(arr) {
  let finalArray = arr.slice();
  
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    finalArray.push(arr[index]);
  }

  return finalArray;
}


console.log(originalAndReverse([1, 2, 3])) 

// Given solution

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}
