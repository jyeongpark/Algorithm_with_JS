const solution = (n) => {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n];
};
console.log(solution(3)); //2
console.log(solution(5)); //5
