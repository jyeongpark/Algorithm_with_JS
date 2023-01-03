const getDiffPoint = (apeche, rion) => {
  //포인트 차이 구하기
  let result = 0;
  if (apeche >= rion) {
    result = -1;
  } else {
    result = 1;
  }
  return apeche || rion ? result : 0;
};

const solution = (n, info) => {
  let answer = [];

  //0점~10점까지 하기 위해 뒤집음
  info.reverse();

  //최고 점수 차이
  let bestDiff = 0;

  const dfs = (restArrow, preAnswer, index, currentDiffPoint) => {
    if (index > 10) {
      //10점까지 다 점수를 구했을 때 남아있는 화살이 0개이고 최대 차이가 더 크다면
      if (!restArrow && currentDiffPoint > bestDiff) {
        bestDiff = currentDiffPoint;
        //다시 뒤집음
        answer = [...preAnswer].reverse();
      }
      return;
    }

    for (let i = restArrow; i >= 0; i--) {
      const newRestArrow = restArrow - i;
      const getPoint = getDiffPoint(info[index], i) * index;

      preAnswer[index] += i;
      dfs(newRestArrow, preAnswer, index + 1, currentDiffPoint + getPoint);
      preAnswer[index] -= i;
    }
  };

  const initArr = new Array(11).fill(0);

  dfs(n, initArr, 0, 0);

  return answer.length ? answer : [-1];
};
console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
