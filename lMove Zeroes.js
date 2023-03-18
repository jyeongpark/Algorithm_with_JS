/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//0을 뒤로 보내면서 last값을 점점 뺀다.
var moveZeroes = function (nums) {
  let start = 0;
  let last = nums.length - 1;
  while (start < last) {
    if (nums[start] === 0) {
      nums.push(nums.splice(start, 1)[0]);
      last--;
    } else {
      start++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1, 2, 3]));
