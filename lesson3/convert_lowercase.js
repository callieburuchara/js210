// accept a string of letters as argument
// accept a string as argument
// create finalString variable 
// iterate through each letter using a for loop & bracket notation
// if the letter is between the the code of 'A' and 'Z', then convert it
// -- and then add it to the string
// if it's not, just add it to the string

function toLowerCase(string) {
  let finalString = '';
  let letter;
  let letterNumber;

  for (let index = 0; index < string.length; index += 1) {
    letter = string[index];
    letterNumber = letter.charCodeAt(0);
    
    if (letter >= 'A' && letter <= 'Z'){ 
      asciiNumber = letterNumber + 32;
      letter = String.fromCharCode(asciiNumber);
    }
    
    finalString += letter;
  }

  return finalString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));
