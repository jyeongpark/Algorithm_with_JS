function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((el) => Number(el));
}

console.log(solution(12345));
