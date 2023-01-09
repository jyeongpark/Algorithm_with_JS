const solution = (ingredient) => {
  let answer = 0;
  let stack = [];
  for (let el of ingredient) {
    stack.push(el);
    if (stack.slice(-4).join("") === "1231") {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      answer += 1;
    }
  }
  return answer;
};

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
console.log(solution([1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1]));
