function push(arr, newElement) {
  arr[arr.length] = newElement;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
