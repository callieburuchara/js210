function reverseOrder(arr) {
  let finalArray = [];

  for(index = arr.length - 1; index >= 0; index -= 1) {
    finalArray.push(arr[index]);
  }

  return finalArray;
}

console.log(reverseOrder([1, 2, 3]));
