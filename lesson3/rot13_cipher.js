const UPPERRANGE = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
const LOWERRANGE = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
const ROTATE = 13;
const ALPHABETLENGTH = 26;

function newUpcaseLetter(asciiNum) {
  asciiNum += ROTATE;
  if (asciiNum > UPPERRANGE[1]) asciiNum -= ALPHABETLENGTH;
  return String.fromCharCode(asciiNum);
}

function newLowercaseLetter(asciiNum) {
  asciiNum += ROTATE;
  if (asciiNum > LOWERRANGE[1]) asciiNum -= ALPHABETLENGTH;
  return String.fromCharCode(asciiNum);
}

function rotateChar(char) {
  let asciiNum = char.charCodeAt(0);

  if (asciiNum >= UPPERRANGE[0] && asciiNum <= UPPERRANGE[1]) {
    return newUpcaseLetter(asciiNum);
  } else if (asciiNum >= LOWERRANGE[0] && asciiNum <= LOWERRANGE[1]) {
    return newLowercaseLetter(asciiNum);
  } else {
    return char;
  }
}

function rot13(string) {
  let newString = '';

  string.split('').forEach(function(currentChar) {
    newString += rotateChar(currentChar);
  });

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

