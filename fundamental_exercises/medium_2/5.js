const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // Adding a property (not included in length)
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon'; // Adding a property (included in Object.keys)
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5
