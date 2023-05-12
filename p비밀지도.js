const toBin = (n, num) => {
  let answer = new Array(n).fill(0);
  let i = 0;
  while (num > 0) {
    answer[i] = num % 2;
    num = parseInt(num / 2);
    i++;
  }
  answer = answer.map((el) => (el === 0 ? " " : "#"));
  //   // console.log(answer);
  return answer.reverse().join("");
};
// const solution = (n, arr1, arr2) => {
//   let answer = [];
//   arr1 = arr1.map((el) => toBin(n, el));
//   arr2 = arr2.map((el) => toBin(n, el));
//   for (let i = 0; i < n; i++) {
//     pre = "";
//     for (let j = 0; j < n; j++) {
//       if (!arr1[i][j] && !arr2[i][j]) {
//         pre += " ";
//       } else {
//         pre += "#";
//       }
//     }
//     // console.log("pre", pre);
//     answer.push(pre);
//   }
//   // console.log(answer);
//   return answer;
// };

const solution = (n, arr1, arr2) => {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let pre = arr1[i] | arr2[i];

    answer.push(toBin(n, pre));
  }
  return answer;
};
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
