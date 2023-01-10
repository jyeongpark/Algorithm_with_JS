// 20230110
const find = (x) => {
  if (Object.values(x).length === 1) {
    return false;
  }
  let value = Object.values(x)[0];
  let otherValue = Object.values(x)
    .slice(1)
    .reduce((acc, cur) => {
      return acc + cur;
    });
  console.log(value, otherValue);
  return value === otherValue;
};
const solution = (s) => {
  let answer = 0;
  let x = {};
  for (let n = 0; n < s.length; n++) {
    let i = s[n];
    if (x[i] !== undefined) {
      x[i] += 1;
    } else {
      x[i] = 1;
    }
    if (n === s.length - 1) {
      if (!find(x)) {
        answer += 1;
      }
    }
    if (find(x)) {
      x = {};
      answer += 1;
    }
  }
  return answer;
};
console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
