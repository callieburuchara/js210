// three arguments: string, startIndex inclusive, endIndex (not inclusive)
// if startIndex > endIndex, swap the values and use like that
// if startIndex === endIndex, return an empty string
// if endIndex is ommitted (an thus undefined), return the substring that is from startIndex to the end of the word
// if either startIndex or endIndex is less than 0 or NaN, treat it as 0
// if start or end is greater than the length of the string, treat it as equal to the string length 

function substring(string, start, end) {
  if (start === end) return '';

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (end > string.length) {
    end = string.length;
  }

let substring = '';
for (let index = start; index < end; index++) {
  substring += string[index];
}

console.log(substring);

}


let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
