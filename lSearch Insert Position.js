/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let answer = 0;
  let first = 0;
  let last = nums.length - 1;
  while (first <= last) {
    let mid = parseInt((first + last) / 2);
    if (nums[mid] < target) {
      answer = mid + 1;
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return answer;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
