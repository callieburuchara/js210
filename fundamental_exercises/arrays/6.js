function reverse(input) {

  if (Array.isArray(input)) {
    return reverseArray(input);
  } else {
    return reverseArray(input.split('')).join('');
  }
}

function reverseArray(arr) {
  let finalArray = [];


  for(index = arr.length - 1; index >= 0; index -= 1) {
    finalArray.push(arr[index]);
  }

  return finalArray;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
