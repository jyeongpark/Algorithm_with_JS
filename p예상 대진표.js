function solution(n, a, b) {
  var answer = 1;

  let count = 2;
  while (true) {
    if (Math.ceil(a / count) === Math.ceil(b / count)) {
      return answer;
    } else {
      count *= 2;
      answer++;
    }
  }
}

console.log(solution(8, 4, 7));
