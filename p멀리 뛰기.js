const solution = (n) => {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n];
};

console.log(solution(4)); //5
console.log(solution(3)); //3

// 재귀 시간초과
// const solution = (n) => {
//   let answer = 0;
//   const recursive = (sum) => {
//     if (sum > n) {
//       return;
//     }
//     if (sum === n) {
//       answer = (answer + 1) % 1234567;
//       return;
//     }
//     for (let i of [1, 2]) {
//       recursive(sum + i);
//     }
//   };
//   recursive(0);
//   return answer;
// };
