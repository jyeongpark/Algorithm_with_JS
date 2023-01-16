const solution = (array, commands) => {
  let answer = [];
  for (c of commands) {
    const [i, j, k] = c;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
};

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
