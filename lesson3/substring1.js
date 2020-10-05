// function accepts 3 arguments: string, start, length
// set an answer variable
// if `start` is less than 0, reassign it to string's length minus itself
// while the answer's size is less than or equal to length


function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let answer = '';
  
  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;

    if (string[index] === undefined) break;
    answer += string[index];
  }

  return answer;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
