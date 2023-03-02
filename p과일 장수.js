const solution = (k, m, score) => {
  let answer = 0;
  score.sort((a, b) => b - a);
  score.forEach((el, idx) => {
    if (idx % m === m - 1) {
      answer += el * m;
    }
  });
  return answer;
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
