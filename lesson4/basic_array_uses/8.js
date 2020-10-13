function endsOf(firstArr, secondArr) {
  return [firstArr[0], secondArr[secondArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
