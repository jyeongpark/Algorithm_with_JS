const solution = (sizes) => {
  let answer = [0, 0];
  sizes = sizes.map((el) => {
    if (el[0] < el[1]) {
      el = [el[1], el[0]];
    }
    return [...el];
  });
  for (let i = 0; i < sizes.length; i++) {
    answer[0] = Math.max(answer[0], sizes[i][0]);
    answer[1] = Math.max(answer[1], sizes[i][1]);
  }
  return answer[0] * answer[1];
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); //133
