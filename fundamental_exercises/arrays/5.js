function pop(arr) {
  let element = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return element;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]


//

function push(arr, newElement) {
  arr[arr.length] = newElement;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

