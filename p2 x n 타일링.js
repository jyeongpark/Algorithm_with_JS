function solution(n) {
  let dp = [];
  const divide = 1000000007;
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % divide;
  }
  return dp[n - 1] % divide;
}

console.log(solution(4));
console.log(solution(7));
