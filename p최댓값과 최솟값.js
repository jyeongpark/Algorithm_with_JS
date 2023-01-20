function solution(s) {
  var answer = "";
  s = s.split(" ").map((el) => Number(el));
  answer += Math.min(...s);
  answer += " " + Math.max(...s);
  return answer;
}
