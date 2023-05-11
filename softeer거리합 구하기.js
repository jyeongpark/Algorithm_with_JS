// const input = ["4", "1 2 1", "2 3 2", "3 4 4"];
const input = ["7", "1 2 5", "1 3 2", "1 4 8", "3 5 4", "3 6 1", "4 7 6"];
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

n = parseInt(input.shift());
const graph = new Array(n + 1).fill(0).map(() => []);
for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map((el) => Number(el));
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// console.log(graph);
// 서브트리 사이즈
const subTreeSize = new Array(n + 1).fill(BigInt(0));
let distSum = new Array(n + 1).fill(BigInt(0)); // 거리의 합들
function dfs1(current, parent) {
  //서브트리 사이즈 구하는 dfs1
  subTreeSize[current] = BigInt(1);
  graph[current].forEach((_, idx) => {
    const child = graph[current][idx][0];
    const weight = graph[current][idx][1];
    if (child !== parent) {
      dfs1(child, current);
      distSum[current] +=
        BigInt(distSum[child]) + BigInt(subTreeSize[child]) * BigInt(weight);
      subTreeSize[current] += BigInt(subTreeSize[child]);
    }
  });
}
function dfs2(current, parent) {
  graph[current].forEach((_, idx) => {
    const child = graph[current][idx][0];
    const weight = graph[current][idx][1];
    if (child !== parent) {
      distSum[child] =
        distSum[current] +
        BigInt(weight) * (BigInt(n) - BigInt(2) * BigInt(subTreeSize[child]));
      dfs2(child, current);
      return;
    }
  });
}
dfs1(1, 1);
dfs2(1, 1);
distSum.forEach((el, idx) => {
  if (idx !== 0) console.log(el.toString());
});
