function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = minutes + '0';
  }
    
  console.log(hours + ':' + minutes);
}

let today = new Date(2013, 2, 1, 10, 32);
formatTime(today);
