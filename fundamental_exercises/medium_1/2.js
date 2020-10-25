let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No, it hits an infinite loop at 0 because you only increment
// (the else branch) when the number is not divisible by 3
