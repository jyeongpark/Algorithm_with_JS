const solution = (order) => {
  let answer = 0;
  //일단 박스들도 배열로 만드는 것이 나을 것 같아서
  let box = Array(order.length)
    .fill()
    .map((el, idx) => idx + 1);
  let preBelt = []; // 보조벨트
  let index = 0; //박스 인덱스
  for (let o of order) {
    // 순서 반복
    if (o === box[index]) {
      //현재 쌓을 박스가 실어야할 때
      answer += 1;
      index += 1;
    } else {
      if (o === preBelt[preBelt.length - 1]) {
        //현재 실어야 할 순서가 보조 컨테이너에 있을때
        answer += 1;
        preBelt = preBelt.slice(0, -1);
      } else {
        //아니면 보조컨테이너에 계속 박스를 옯긴다.
        while (box[index] !== o) {
          if (index >= order.length) return answer; //만약 더이상 실을 박스가 없다면
          preBelt.push(box[index]);
          index += 1;
        }
        //옮기다가 현재 실어야하는 박스가 나타나면
        if (box[index] === o) {
          answer += 1;
          index += 1;
        }
      }
    }
  }
  return answer;
};

console.log(solution([4, 3, 1, 2, 5])); //2
console.log(solution([5, 4, 3, 2, 1])); //5
