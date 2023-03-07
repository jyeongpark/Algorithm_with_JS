/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let answer = -1;
  let start = 0;
  let last = nums.length - 1;
  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    if (nums[mid] === target) {
      answer = mid;
      break;
    } else if (nums[mid] > target) {
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));

console.log(search([5], 5));
