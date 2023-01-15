const solution = (nums) => {
  //폰켓몬 종류 수의 최대값
  let answer = 0;
  let half = nums.length / 2;
  nums.sort((a, b) => a - b); //정렬
  let hash = {};
  nums.forEach((el) => {
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });

  console.log(Object.keys(hash).length > half);
  if (Object.keys(hash).length > half) {
    answer = half;
  } else {
    answer = Object.keys(hash).length;
  }
  return answer;
};

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
