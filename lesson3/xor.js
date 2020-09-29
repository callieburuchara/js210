function isXor(first, second) {
  if (first && second || (!!first === false && !!second === false)) {
    return false;
  }

  return true;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false
console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23)); 

// Given Solution
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }

  if (!value1 && value2) {
    return true;
  }

  return false;
}

// Further Exploration 1

function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// Further Exploration 2

function isXor(value1, value2) {
  return Boolean(value1) !== Boolean(value2);
}
