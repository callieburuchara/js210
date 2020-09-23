let oldArray = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
  return array.filter (Number.isInteger); 
}

let newArray = removeNonInteger(oldArray)
console.log(newArray);
