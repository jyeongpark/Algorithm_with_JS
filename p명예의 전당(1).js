const solution = (k, score) => {
  let answer = [];
  let price = [];
  while (score.length !== 0) {
    price.push(score.shift());
    price = price.sort((a, b) => b - a);
    if (price.length < k) {
      answer.push(price.slice(-1)[0]);
    } else {
      answer.push(price[k - 1]);
    }
  }
  return answer;
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
