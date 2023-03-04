function solution(A, B) {
  let answer = 0;
  A = A.split("");
  for (let i = 0; i < A.length; i++) {
    if (A.join("") === B) {
      return answer;
    }
    let p = A.pop();
    A.unshift(p);
    answer++;
  }
  return -1;
}
