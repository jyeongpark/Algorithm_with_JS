const find = (n) => {
  let answer = 0;
  let sqrt = parseInt(Math.sqrt(n));
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      answer += 2;
    }
  }
  if (Math.sqrt(n) === sqrt) answer -= 1;
  return answer;
};
const solution = (number, limit, power) => {
  let answer = 0;
  for (let n = 1; n <= number; n++) {
    if (find(n) > limit) {
      answer += power;
    } else {
      answer += find(n);
    }
  }
  return answer;
};

console.log(solution(5, 3, 2)); //10
console.log(solution(10, 3, 2)); //21
