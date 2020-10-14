function dateSuffix(day) {
  if ([11, 12, 13].includes(day)) {
    return day + 'th';
  }

  let lastDigit = String(day).split('').reverse()[0];

  switch (lastDigit) {
    case '1':
      return day + 'st';
    case '2':
      return day + 'nd';
    case '3':
      return day + 'rd';
    default:
      return day + 'th';
  }
}


let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let todayWeek = daysOfWeek[today.getDay()];
let todayNum = dateSuffix(today.getDate());
let todayMonth = today.getMonth();

console.log(`Today's date is ${todayWeek}, ${todayMonth} ${todayNum}.`);



