function solution(board) {
  const isWinCase = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let first = [];
  let second = [];
  //1. 개수세기
  //2. 종료되었을 때
  for (let i = 0; i < 3; i++) {
    board[i].split("").forEach((el, idx) => {
      if (el === "O") {
        first.push(i * 3 + idx + 1);
      } else if (el === "X") {
        second.push(i * 3 + idx + 1);
      }
    });
  }
  const isWinFunc = () => {
    for (let i = 0; i < isWinCase.length; i++) {
      const el = isWinCase[i];
      const f = el.every((e) => first.includes(e));
      const s = el.every((e) => second.includes(e));

      if (f && first.length === second.length) {
        //O가 끝났는데 X가 둔 경우
        return true;
      }
      if (s && first.length > second.length) {
        //X가 끝났는데 O가 둔 경우
        return true;
      }
    }
    return false;
  };
  console.log(first, second);
  if (first.length < second.length || first.length - second.length > 1) {
    //개수 문제
    return 0;
  } else if (isWinFunc()) {
    return 0;
  } else {
    return 1;
  }
}

console.log(solution(["O.X", ".O.", "..X"]));
console.log(solution(["OOO", "...", "XXX"]));
console.log(solution(["...", ".X.", "..."]));
console.log(solution(["...", "...", "..."]));
console.log(solution(["OO.", "X..", ".O."]));
console.log(solution(["OXO", "XOX", "OXO"]));
