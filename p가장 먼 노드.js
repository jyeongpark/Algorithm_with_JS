const solution = (n, edge) => {
  let answer = 0;
  const visited = new Array(n + 1).fill(0);
  const graph = new Array(n + 1).fill(0).map((el) => []);
  edge.forEach((el) => {
    graph[el[0]].push(el[1]);
    graph[el[1]].push(el[0]);
  });
  const bfs = () => {
    const queue = [];
    queue.push(1);
    visited[1] = true;
    while (queue.length !== 0) {
      console.log(queue);
      const qLength = queue.length;
      answer = queue.length;
      for (let i = 0; i < qLength; i++) {
        let now = queue.shift();
        for (let i = 0; i < graph[now].length; i++) {
          if (!visited[graph[now][i]]) {
            visited[graph[now][i]] = true;
            queue.push(graph[now][i]);
          }
        }
      }
    }
  };
  bfs();
  return answer;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
