function uniqueElements(arr) {
  let finalArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (!finalArray.includes(arr[index])) {
      finalArray.push(arr[index]);
    }
  }

  return finalArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

