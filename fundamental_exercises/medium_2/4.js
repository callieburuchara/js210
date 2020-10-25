//function doubler(number, caller) {
//  console.log(`This function was called by ${caller}.`);
//  return number + number;
//}

//doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(str) {
  return function doubler(number) {
    console.log(`This function was called by ${str}.`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.
