const solution = (s) => {
  let answer = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    s.push(s.shift());
    if (findCase(s)) {
      answer++;
    }
  }
  return answer;
};

const findCase = (s) => {
  let answer = 0;
  let stack = [];
  for (let i of s) {
    switch (i) {
      case "[":
      case "{":
      case "(":
        stack.push(i);
        break;
      case "]":
        if (stack.pop() === "[") {
          answer += 1;
          break;
        } else {
          return 0;
        }

      case "}":
        if (stack.pop() === "{") {
          answer += 1;
          break;
        } else {
          return 0;
        }

      case ")":
        if (stack.pop() === "(") {
          answer += 1;
          break;
        } else {
          return 0;
        }
    }
  }
  if (stack.length > 0) {
    return 0;
  }
  return answer;
};
console.log(solution("[](){}")); //3
console.log(solution("}]()[{")); //2
console.log(solution("[)(]")); //0
console.log(solution("}}}")); //0
console.log(solution("{{")); //0
