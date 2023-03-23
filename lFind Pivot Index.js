/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let index = 0;
  while (index < nums.length) {
    let left =
      index !== 0 ? nums.slice(0, index).reduce((acc, cur) => acc + cur) : 0;
    let right =
      index !== nums.length - 1
        ? nums.slice(index + 1).reduce((acc, cur) => acc + cur)
        : 0;
    if (left === right) {
      return index;
    } else {
      index++;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
