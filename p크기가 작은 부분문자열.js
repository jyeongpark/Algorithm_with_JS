// 20230101
// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript
function solution(t, p) {
  // var answer = 0;
  // let tLen = t.length;
  // let pLen = p.length;
  // let l = [];
  // for (let i = 0; i <= tLen - pLen; i++) {
  //   let pre = "";
  //   for (let j = 0; j < pLen; j++) {
  //     pre += t[i + j];
  //   }
  //   if (Number(pre) <= Number(p)) {
  //     answer = answer + 1;
  //   }
  // }

  // return answer;
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let pre = t.slice(i, i + p.length);
    if (+pre <= +p) {
      //문자열을 숫자로 만들기. 자바스크립트니까 가능
      answer += 1;
    }
  }

  return answer;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
