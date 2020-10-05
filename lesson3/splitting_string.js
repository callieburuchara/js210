// function that accepts two arguments
// if the delimiter is not supplied (second argument)
// then log ERROR: No delimiter
// otherwise...

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let currentWord = '';

  for (let index = 0; index < string.length ; index += 1) {
    if (string[index] === delimiter) {
      console.log(currentWord);
      currentWord = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      currentWord += string[index];
    }
  }

  if (currentWord) console.log(currentWord);
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString(';hello;', ';');
splitString('hello', ';');
