//function penultimate(string) {
//  return string.split(' ')[-2];
//}

// you can't use negative indexes to access the index
// because Arrays are objects, it thinks this is a key
// So this actually returns undefined
// Fix like so:

function penultimate(string) {
  let splitStr = string.split(' ');
  return splitStr[splitStr.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

