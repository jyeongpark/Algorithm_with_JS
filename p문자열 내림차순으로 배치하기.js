function solution(s) {
  return s.split("").sort().reverse().join("");
}
console.log(solution("Zbcdefg")); //"gfedcbZ"
console.log(solution("acb")); //"cba"
