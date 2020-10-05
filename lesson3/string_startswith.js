// accept two arguments: string, searchString
// figure out the length of the searchString
// convert that to an index range
// if that index range matches that of string, return true
// otherwise, return false
// case sensitive, too

function startsWith(string, searchString) {
  let endIndex = searchString.length - 1;
  let partialString = '';

  for (index = 0; index <= endIndex; index += 1) {
    partialString += string[index];
  }

  return (partialString === searchString);
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
