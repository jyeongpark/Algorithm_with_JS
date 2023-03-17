/**
 * @param {number[]} nums
 * @return {number[]}
 */
//선택정렬
var sortedSquares = function (nums) {
  nums = nums.map((el) => Math.abs(el) * Math.abs(el));

  const swap = (a, b, nums) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
    return a, b;
  };

  for (let i = 0; i < nums.length; i++) {
    min_index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min_index] > nums[j]) {
        min_index = j;
      }
    }
    swap(i, min_index, nums);
  }
  return nums;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
