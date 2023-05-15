function solution(n) {
  var answer = 1;
  let left = 1;
  let right = left;
  let sum = 0;
  sum += left;
  while (right <= Math.floor(n / 2)) {
    if (sum < n) {
      right += 1; //더하고
      sum += right; //right++
    }
    if (sum > n) {
      sum -= left; //빼고
      left += 1; //left++
    }
    if (sum === n && left !== right) {
      answer += 1;
      right += 1;
      sum += right;
    }
  }
  return answer;
}

console.log(solution(15));
console.log(solution(2));
