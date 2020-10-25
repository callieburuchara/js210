// We love to visit museums if they are about science or computers. We're undecided when it comes to modern art, and would rather not go in most cases. However, we're willing to go to any modern art museum that is about Andy Warhol (we like him!) or that is located in nearby Amsterdam. We'd rather skip any other museums.

// We tried to implement these preferences in a function, so we can automatically sort through long lists of museums and find the ones that sound interesting. However, our Boolean check is flawed, as it fails some of our test cases. Can you fix it?
function wantToVisit(museum, city) {
  return museum.includes('Computer') ||
         museum.includes('Science') ||
         (museum.includes('Andy') && (museum.includes('Modern') || city.includes('Amsterdam'))) ||
         (museum.includes('Modern') && city.includes('Amsterdam'));
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true); 
// 
// true === true
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// false === true
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);


// modern + amsterdam == true
// amsterdam alone == false
// andy + modern == true 


// Function declaration, function expression, arrow function
// // Function declaration
// function greeting(name) {
//   console.log(`Whaddup my dude. How are you, ${name}?`);
// }
// // Function expression
// // anonymous function expression
// let greeting = function(name) {
//   console.log(`Whaddup my dude. How are you, ${name}?`);
// }
// // named function expression
// let greeting = function bar(name) {
//   console.log(`Whaddup my dude. How are you, ${name}?`);
// }
// Arrow functions
// function example(arr) {
//   return arr.map(element => element.toUpperCase());
// }

function makeTodo(name) {
  let todos = [name, '------'];
  
  return function(newTodo) {
    if (newTodo !== undefined) {
      todos.push(newTodo);
    }
    
    return todos.join('\n')
  }
}

let myTodo = makeTodo('Today')
console.log(myTodo());
myTodo('eat')
myTodo('study')
myTodo('sleep')
myTodo('steal')
console.log('')
console.log(myTodo());



let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);



/*
- Line 83 logs [1, 2, 10]
- On line 76, we use `let` to declare global variable `a` and assign it to an Array: [1, 2, 3]
- On lines 78-80, we use a function DECLARATION to define a function. It accepts one parameter: `b`.
- On line 79, we access the 2nd index position in the passed in argument and reassin it to itself but increased by 7.
- This function returns undefined because nothing was explicitly returned, and that's what functions return when you don't explicitly return anything.
- On line 82, we invoke the myValue function and we pass in the array that `a` is referencing: [1, 2, 3].
- During this function call, we can see on line 79 what happens: `b` references [1, 2, 3] (from the passed in argument on line 82). Currently, `a` and `b` are referencing the same array in the same place in memory. 
  - `b[2]` accesses the item in the array in the 2nd index position, which is `3`. We use the `+=` operator to reassign that position to what it currently is (3) plus 7 (10).
- Arrays are mutable, therefore it retains this change, even after the function call has finished. 
- Thus, on line 83, it outputs [1, 2, 10].

- This demonstrates that Arrays are mutable, and they retain changes made through assignment with bracket notation. 
- This also demonstrates that objects in JS are passed by reference. 
