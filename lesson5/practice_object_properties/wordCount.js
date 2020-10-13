function wordCount(str) {
  let wordCount = {};
  let arrStr = str.split(' ');

  for (let idx = 0; idx < arrStr.length; idx += 1) {
    let word = arrStr[idx];

    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

