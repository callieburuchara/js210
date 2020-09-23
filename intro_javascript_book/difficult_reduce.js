let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   let answer = arr.map (function (str) {
//                 return str.length
//                }).filter (num => num % 2 !== 0);
//   return answer;
// }
// 
console.log(oddLengths(arr));

function oddLengths(arr) {
  let answer = arr.reduce((accum, element) => {
    if (element.length % 2 !== 0) {
      accum.push(element.length);
  }
    return accum;
  }, []);

  return answer;
}
