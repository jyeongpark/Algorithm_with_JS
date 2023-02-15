function solution(s) {
  var answer = 0;
  s.toLowerCase()
    .split("")
    .forEach((el) => {
      if (el === "p") answer += 1;
      else if (el === "y") answer -= 1;
    });

  return !answer;
}

console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); //false
