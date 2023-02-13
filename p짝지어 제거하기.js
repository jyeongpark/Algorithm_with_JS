const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i].toString();
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length ? 0 : 1;
};

console.log(solution("baabaa"));
console.log(solution("cdcd"));
