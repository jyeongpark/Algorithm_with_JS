const solution = (number, k) => {
  let l = [];
  for (let i = 0; i < number.length; i++) {
    while (l.length > 0 && l[l.length - 1] < number[i] && k > 0) {
      k--;
      l.pop();
    }
    l.push(number[i]);
  }
  l.splice(-1, k);
  return l.join("");
};

// 10번 시간초과
// const solution = (number, k) => {
//   number = number.split(""); //일단 배열로
//   let i = 0;
//   while (k > 0) {
//     if (i >= number.length) {
//       number.splice(-1, k);
//       break;
//     }
//     if (number[i] < number[i + 1]) {
//       number.splice(i, 1);
//       k--;
//       i = i - 1;
//     } else {
//       i++;
//     }
//   }
//   return number.join("");
// };

console.log(solution("1924", 2)); //"94"
console.log(solution("1231234", 3)); //"3234"
console.log(solution("4177252841", 4)); //"775841"
console.log(solution("999198", 2)); //"9999"
