function solution(n) {
  let third = [];
  while (n > 0) {
    third.unshift(n % 3); //3 진법
    n = Math.floor(n / 3);
  }
  let answer = 0;
  third.forEach((t, i) => {
    answer += t * 3 ** i;
  });
  return answer;
}

console.log(solution(45));

console.log(solution(125));
