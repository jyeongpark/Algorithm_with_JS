const solution = (n) => {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      return answer;
    }
  }
  return answer;
};
console.log(solution(10));
console.log(solution(12));
