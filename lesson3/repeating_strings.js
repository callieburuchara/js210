function repeat(string, times) {
  if (times < 0 || typeof(times) !== 'number') return undefined;

  let completedString = '';

  for (let counter = 1; counter <= times; counter += 1) {
    completedString += string;
  }

  return completedString;
}

console.log(repeat('Callie', 3));    // "CallieCallieCallie"
console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
