/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts
    .map((el) => {
      return el.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
    })
    .reduce((acc, cur) => Math.max(acc, cur));
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
