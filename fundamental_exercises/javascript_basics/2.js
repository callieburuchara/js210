const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // logs to the console
}

if (!myString) {
  console.log('World'); // does not log to the console
}

if (!!myArray) {
  console.log('World'); // logs to the console
}

if (myOtherString || myArray) { // logs to the console
  console.log('!');
}
