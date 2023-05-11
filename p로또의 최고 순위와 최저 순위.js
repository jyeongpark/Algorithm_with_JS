function solution(lottos, win_nums) {
  var answer = [];
  lottos = lottos.sort((a, b) => a - b).filter((el) => el !== 0);
  // console.log(lottos)
  let zero = 6 - lottos.length;
  win_nums.sort((a, b) => a - b);
  lottos.forEach((el) => {
    for (let i = 0; i < win_nums.length; i++) {
      if (el === win_nums[i]) {
        answer.push(el);
        break;
      }
    }
  });
  // console.log("zero",zero)
  let score = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 }; // 맞힌 개수, 순위
  return [score[answer.length + zero], score[answer.length]];
}
