const myObject = {
  prop1: '123',
  prop2: '234', // changed to prop2: 456
  'prop 3': '345',
  // added '456' = '678'
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2); // '456'


// Further Exploration
const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // {funcProp: 'hello, '}
myObj[myFunc()] = 'world!'; // {funcProp: 'world!'}
console.log(myObj); // {funcProp: 'world!'}
