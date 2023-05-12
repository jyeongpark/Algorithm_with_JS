const solution = (routes) => {
  let answer = [];
  routes = routes.sort((a, b) => a[1] - b[1]); // 도착순이 작은것부터
  // console.log(routes);
  answer.push(routes[0][1]);
  let i = 0;
  while (i < routes.length - 1) {
    // console.log(answer);
    i++;
    if (answer[answer.length - 1] >= routes[i][0]) {
      continue;
    } else {
      answer.push(routes[i][1]);
    }
  }
  return answer.length;
};

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
