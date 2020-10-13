function shift(arr) {
  let deleted = arr[0];
  let newLength = arr.length - 1;
  
  for (idx = 1; idx < arr.length ; idx += 1){
    arr[idx - 1] = arr[idx];
  }
  arr.length = newLength;
  return deleted;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
