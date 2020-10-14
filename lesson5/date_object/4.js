let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let todayWeek = daysOfWeek[today.getDay()];
let todayMonth = today.getDate();

console.log(`Today's date is ${todayWeek}, the ${todayMonth}.`);

