let numbers = [3, 5, 7]
console.log(sumOfSquares(numbers));

function sumOfSquares(arr) {
  return arr.reduce((accum, el) => accum += (el * el), 0);
}
