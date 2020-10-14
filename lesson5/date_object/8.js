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

function formattedWeek(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDay(date) {
  return dateSuffix(date.getDate());
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',                'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDate(date) {
  let week = formattedWeek(date);
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's date is ${week}, ${month} ${day}.`);
}


let today = new Date();
formattedDate(today);
