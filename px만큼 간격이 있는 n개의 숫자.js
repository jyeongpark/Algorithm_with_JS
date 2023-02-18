const solution = (x, n) => {
  let answer = [];
  if (x > 0) {
    for (let i = x; i <= x * n; i = i + x) {
      answer.push(i);
    }
  } else if (x === 0) {
    for (let i = 0; i < n; i++) {
      answer.push(0);
    }
  } else {
    for (let i = x; i >= x * n; i = i + x) {
      answer.push(i);
    }
  }

  return answer;
};

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
console.log(solution(-5, 10));
console.log(solution(5, 10));
console.log(solution(5, 1));
console.log(solution(0, 3));
