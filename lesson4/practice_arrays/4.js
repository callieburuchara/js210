function forceString(arr) {
  let stringAnswer = '';

  for (let index = 0; index < arr.length; index += 1) {
    stringAnswer += String(arr[index]);
  }

  return stringAnswer;
}

console.log(forceString([1, 'a', 4]));
