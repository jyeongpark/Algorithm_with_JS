const solution = (s) => {
  let answer = Array.from({ length: s.length }, () => -1); // 답 초기화
  let obj = {}; //객체

  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      //객체 안에 s[i]가 있으면
      answer[i] = i - obj[s[i]];
      //answer에 저장
    }
    obj[s[i]] = i;
    //객체 새로 초기화
  }
  return answer;
};
console.log(solution("banana"));
console.log(solution("foobar"));
