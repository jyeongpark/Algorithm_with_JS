const solution = (arr) => {
  let answer = [];
  arr.reverse();
  while (arr.length) {
    let a = arr.pop();
    a !== answer[answer.length - 1] && answer.push(a);
  }
  return answer;
};

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //[4,3]
