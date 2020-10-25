const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5; // myArray = [5, 5, '-1': 5, '-2': 5]

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i]; // sum += 5, 5, 5, 5
  }

  return sum / array.length; // 20 / 2 (only the first two array elements count towards the length; the latter 2 are properties)
}

console.log(average(myArray));
