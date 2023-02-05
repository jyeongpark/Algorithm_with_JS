const solution = (a, b) => {
  if (a > b) {
    [a, b] = [b, a];
  }
  let answer = 0;
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
};

console.log(solution(-10, -9)); // -19
console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
