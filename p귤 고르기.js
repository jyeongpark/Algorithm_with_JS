const solution = (k, tangerine) => {
  let t = {};
  let answer = 0;
  tangerine.forEach((el) => (t[el] ? (t[el] += 1) : (t[el] = 1)));
  t_value = Object.values(t).sort((a, b) => b - a);
  for (let el of t_value) {
    if (k - el > 0) {
      answer += 1;
      k -= el;
    } else {
      answer += 1;
      break;
    }
  }

  return answer;
};
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
