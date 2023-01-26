const getPrime = (maxNum) => {
  let isPrime = [2];
  for (let i = 3; i <= maxNum; i++) {
    let isExist = false;
    let sqrt = parseInt(Math.sqrt(i)); //제곱근 구하기
    if (i % 2 === 0) {
      continue; //짝수면 continue
    }
    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) {
        isExist = true;
        continue;
      }
    }
    !isExist && isPrime.push(i); // 소수 리스트에 추가
  }
  return isPrime;
};
const solution = (nums) => {
  let answer = 0;
  let maxSum = nums.reduce((acc, cur) => acc + cur); //최대값구하기
  let prime = getPrime(maxSum); // 소수 구하기
  //세개 합 구해서 소수인지 확인
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (prime.includes(nums[i] + nums[j] + nums[k])) answer += 1;
      }
    }
  }
  return answer;
};

console.log(solution([1, 2, 3, 4])); //1
console.log(solution([1, 2, 7, 6, 4])); //4
