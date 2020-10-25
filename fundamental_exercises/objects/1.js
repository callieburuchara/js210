const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
}

let a = 'bubba';
console.log(myObject[1]);         // d
console.log(myObject[a] = 'hi');  // hi
console.log(myObject[a]);         // hi
console.log(myObject.a);          // name
console.log(myObject);            
// { '1': 'd', '123': 'c', a: 'name', b: 'test', bubba: 'hi' }
