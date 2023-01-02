function solution(n) {
  var answer = [];
  answer = String(n).split("").reverse();
  answer = answer.map((el) => Number(el));
  return answer;
}

console.log(solution(12345));
