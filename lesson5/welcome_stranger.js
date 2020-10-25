function greetings(arr, obj) {
  let name = arr.join(' ');

  console.log(`Greetings, ${name}! Nice to have a ${obj.title} ` +
              `${obj.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

