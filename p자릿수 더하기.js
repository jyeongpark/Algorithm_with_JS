function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
}
console.log(solution(123));
console.log(solution(987));
