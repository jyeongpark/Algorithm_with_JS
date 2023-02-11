const solution = (progresses, speeds) => {
  let answer = [];
  let list = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx])); //몇일 남았는지 리스트화
  let maxValue = [list[0], 1]; // 제일 큰 숫자, 쌓인 일수
  for (let i = 1; i < list.length; i++) {
    if (maxValue[0] < list[i]) {
      //새로운게 더 크면
      answer.push(maxValue[1]);
      maxValue = [list[i], 1];
    } else {
      maxValue[1] += 1;
    }
    if (i === list.length - 1) {
      //마지막숫자 작업
      answer.push(maxValue[1]);
    }
  }
  return answer;
};

console.log(solution([93, 30, 55], [1, 30, 5])); //[2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1,3,2]
