// 20230105
// x축을 기준으로 배열을 만들어 그 x축에 들어있는 최대 y값을 구한 후 다시 반복문을 돌려 그 아래있는 경우까지 구한다
const solution = (k, d) => {
  let answer = 0;
  let start = d % k === 0 ? d : d - (d % k);
  let dp = new Array(d + 1).fill(0);
  for (let x = start; x >= 0; x = x - k) {
    // console.log("x,값", x, Math.sqrt(d ** 2 - x ** 2));
    dp[x] = Math.floor(Math.sqrt(d ** 2 - x ** 2)) + 1;
  }
  for (let i of dp) {
    // console.log(i, Math.ceil(i / k));
    answer += Math.ceil(i / k);
  }
  return answer;
};
console.log(solution(2, 4));
console.log(solution(1, 5));

// 시간초과1
// const solution = (k, d) => {
//   let answer = 0;
//   for (let i = 0; i <= d; i = i + k) {
//     for (let j = 0; j <= d; j = j + k) {
//       if (i ** 2 + j ** 2 <= d ** 2) {
//         answer += 1;
//       }
//     }
//   }
//   return answer;
// };
// console.log(solution(2, 4));
// console.log(solution(1, 5));

// 시간초과2
// const solution = (k, d) => {

//   let answer = 0;
//   let start = d % k === 0 ? d : d - (d % k);
//   let half = start % 2 === 0 ? start / 2 : Math.ceil(start / 2);
//   for (let x = start; x >= 0; x = x - k) {
//     for (let y = start; y >= 0; y = y - k) {
//       if (x ** 2 + y ** 2 <= d ** 2) {
//         answer += Math.floor(y / k) + 1;
//         break;
//       }
//     }
//   }
//   return answer;
// };
// console.log(solution(2, 4));
// console.log(solution(1, 5));
