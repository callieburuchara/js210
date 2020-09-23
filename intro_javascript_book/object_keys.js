let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = [];

Object.keys(obj).forEach (function (letter) {
  newArray.push(letter.toUpperCase());
});

console.log(newArray);

// Other Given Solution

let objKeys = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objKeys);
console.log(obj);
