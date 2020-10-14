let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString()); // true

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString()); // false

