function indexOf(firstString, secondString) {
  let subLength = secondString.length;
  let index = 0;
  let currentSub;
  let endIndex;

  while (index <= firstString.length - subLength) {
    endIndex = index + subLength
    currentSub = firstString.slice(index, endIndex);
    
    if (currentSub === secondString) return index;
    index += 1;
  }

  return -1;
}


// Writing it with a for loop instead
function indexOf(firstString, secondString) {
  let subLength = secondString.length;
  let limit = firstString.length - subLength;
  let currentSub;

  for (let index = 0, endIndex; index <= limit; index += 1) {
    endIndex = index + subLength
    currentSub = firstString.slice(index, endIndex);
    
    if (currentSub === secondString) return index;
  }

  return -1;
}

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1
// console.log(indexOf('Supercalifragalisticexpialadocious', 'fragal')); // 9


function lastIndexOf(firstString, secondString) {
  let subLength = secondString.length;
  let mainLength = firstString.length
  let limit = firstString.length - subLength;
  let currentSub;

  for (let index = mainLength, endIndex; index >= limit; index -= 1) {
    endIndex = index + subLength
    currentSub = firstString.slice(index, endIndex);
    
    if (currentSub === secondString) return index;
  }

  return -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

