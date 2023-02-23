const solution = (numbers) => {
  let answer = 45;
  for (let n of numbers) {
    answer -= n;
  }
  return answer;
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
