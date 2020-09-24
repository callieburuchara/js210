// represents 5 different unique execution paths

if (condition1) {
  // ...
  if (condition2) {
    // ... // 1
  } else {
    // ... // 2
  }
} else {
  // ... // 3
  if (condition4) {
    // ... // 4
    if (condition5) {
    // ...  // 5
    }
  }
}
