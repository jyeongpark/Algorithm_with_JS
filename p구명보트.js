const solution = (people, limit) => {
  let answer = 0;
  people.sort((a, b) => b - a); //내림차순으로 정렬
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (left === right) {
      answer++;
      break;
    }
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }
    answer++;
  }

  return answer;
};
console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 50], 100)); //3
console.log(solution([50, 50, 50, 50], 100)); //2
console.log(solution([10, 30, 70, 80, 90], 100)); //3
