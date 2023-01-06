function solution(common) {
  let sum = 0;
  let time = 0;

  sum = common[1] - common[0];
  time = common[1] / common[0];

  if (common[1] + sum === common[2]) {
    return common[common.length - 1] + sum;
  } else {
    return common[common.length - 1] * time;
  }
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
