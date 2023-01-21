const solution = (s) => {
  let answer = "";
  s = s.toLowerCase();
  let next = true;
  for (let i of s) {
    answer += next ? i.toUpperCase() : i;
    next = i === " " ? true : false;
  }

  return answer;
};
console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
