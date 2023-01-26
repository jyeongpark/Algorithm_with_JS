// 정답(시간복잡도,공간복잡도 신경쓰기)
const solution = (sticker) => {
  let answer = 0;
  let dp = [0, sticker[0]]; // 처음에 도둑질 한 경우
  for (let i of sticker.slice(1, -1)) {
    // 마지막꺼는 들어가지 않는다
    dp = [getMax(dp[0], dp[1]), dp[0] + i];
  }
  let max1 = getMax(dp[0], dp[1]);
  dp = [0, 0]; // 처음에 도둑질 안한경우
  for (let i of sticker.slice(1)) {
    //두 번째부터 끝까지
    dp = [getMax(dp[0], dp[1]), dp[0] + i];
  }
  let max2 = getMax(dp[0], dp[1]);
  answer = getMax(max1, max2);
  return answer;
};
const getMax = (a, b) => {
  return a > b ? a : b;
};

// dp 정확성은 다 맞음 효율성 시간초과
// const solution = (sticker) => {
//   let answer = 0;
//   let length = sticker.length; // 길이
//   let s1 = [...sticker]; // 복사본
//   let s2 = [...sticker]; //복사본
//   let dp1 = [[0, 0, s1[0]]]; // 첫 번째 스티커 뜯은 경우
//   s1[length - 1] = 0; // 마지막은 쓸 수 없다
//   let dp2 = [[0, 0, 0]]; //첫 번째 스티커 뜯지 않은 경우
//   for (let i = 1; i < length; i++) {
//     let max1 = Math.max(dp1[i - 1][0], dp1[i - 1][1]); // 다음 숫자가 가질 수 있는 최대값
//     dp1.push([dp1[i - 1][2], max1, max1 + s1[i]]);
//     let max2 = Math.max(dp2[i - 1][0], dp2[i - 1][1]); // 다음 숫자가 가질 수 있는 최대값
//     dp2.push([dp2[i - 1][2], max2, max2 + s2[i]]);
//   }
//   answer = Math.max(...dp1[length - 1], ...dp2[length - 1]);
//   return answer;
// };
// console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])); //36
// console.log(solution([1, 3, 2, 5, 4])); //8

//재귀 시간초과
// const setZero = (list, index) => {
//   let length = list.length;
//   list[index] = 0;
//   if (index + 1 >= length) {
//     list[0] = 0;
//   } else {
//     list[index + 1] = 0;
//   }
//   if (index - 1 < 0) {
//     list[length - 1] = 0; // 배열 마지막 0으로
//   } else {
//     list[index - 1] = 0;
//   }
//   return list;
// };
// const solution = (sticker) => {
//   let answer = 0;
//   const findOne = (s, index, sum) => { // 스티커 배열, 인덱스, 합
//     if (s.every((el) => el === 0) || index >= sticker.length) { // 만약에 다 뜯겼으면
//       answer = Math.max(answer, sum);
//       return;
//     }
//     findOne(s, index + 1, sum); // 안 뜯었을 때
//     if (s[index])
//       findOne(setZero([...s], index), index + 1, sum + sticker[index]); // 뜯었을 때
//   };
//   findOne([...sticker], 0, 0);
//   return answer;
// };
