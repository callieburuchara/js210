function repeatedCharacters(str) {
  let arrStr = str.toLowerCase().split('');
  let repeated = {};

  arrStr.forEach(function(letter) {
    if (repeated[letter]) {
      repeated[letter] += 1;
    } else {
      repeated[letter] = 1;
    }
  });

  for (const letter in repeated) {
    if (repeated[letter] === 1) delete repeated[letter];
  }

  return repeated;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
