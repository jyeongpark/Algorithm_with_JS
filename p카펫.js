const solution = (brown, yellow) => {
  let col = 1; //노란색 세로의 길이를 가정한다.
  while (true) {
    // 무한루프
    if ((yellow / col) % 1 === 0) {
      //일단 노란색의 경우에도 col로 나누어 떨어져야 경우가 맞다.
      let b = (yellow / col + 2) * 2 + col * 2; //b는 col을 기준으로 갈색의 갯수를 센 것
      if (b === brown) {
        // b와 brown이 같으면 전체의 가로, 세로 길이를 반환
        return [yellow / col + 2, col + 2];
      }
    }
    col++; // 노란색 세로 ++
  }
};

console.log(solution(10, 2)); //[4,3]
console.log(solution(8, 1)); //[3,3]
console.log(solution(24, 24)); //[8,6]
