const solution = (storey) => {
  let answer = 0;
  //첫째짜리
  const c = storey.toString().length + 1; // 제일 큰 자릿수
  for (let i = 0; i < c; i++) {
    let n = storey % 10;
    storey = Math.floor(storey / 10);

    if (n < 5) {
      answer += n;
    } else if (n > 5) {
      answer += 10 - n;
      storey += 1;
    } else {
      if (storey % 10 >= 5) {
        answer += 5;
        storey += 1;
      } else {
        answer += 5;
      }
    }
    if (storey === 0) {
      break;
    }
  }

  return answer;
};

console.log(solution(16));
console.log(solution(2554));
