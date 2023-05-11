const solution = (n, times) => {
  let answer = 0;
  let left = Math.min(...times);
  let right = Math.max(...times) * n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 시간동안 심사
    let sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0); //mid시간동안 심사 가능한 사람 수

    if (sum < n) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }
  }

  return answer;
};

console.log(solution(6, [7, 10]));
