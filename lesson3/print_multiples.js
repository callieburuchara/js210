function logMultiples(number) {
  for (let current = 99; current >= number; current -= 2) {
    if (current % number === 0) {
      console.log(current);
    }
  }
}

logMultiples(21);
