function allCaps(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text
  }
};

console.log(allCaps('hello world!'));
console.log(allCaps('goodbye'));
