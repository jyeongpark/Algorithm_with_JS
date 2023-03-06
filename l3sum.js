/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//성공 투인터
var threeSum = function (nums) {
  let answer = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      //이미 있는 배열인 경우
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return answer;
};

// 시간초과 반복
// var threeSum = function (nums) {
//   let answer = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         let sum = nums[i] + nums[j] + nums[k];
//         let str = [nums[i], nums[j], nums[k]].join(".");
//         if (sum === 0 && !answer.includes(str)) {
//           answer.push(str);
//         }
//       }
//     }
//   }
//   answer = answer.map((el) => el.split(".").map(Number));
//   return answer;
// };

// 시간초과 재귀
// var threeSum = function (nums) {
//   let answer = [];
//   nums.sort((a, b) => a - b);
//   let visited = Array.from({ length: nums.length }, () => false);
//   const recur = (list, sum) => {
//     if (list.length === 3) {
//       let l = list.sort((a, b) => a - b).join(",");
//       if (!answer.includes(l) && sum === 0) {
//         answer.push(l);
//       }
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (!visited[i]) {
//         visited[i] = true;
//         recur([...list, nums[i]], sum + nums[i]);
//         visited[i] = false;
//       }
//     }
//   };
//   recur([], 0);
//   answer = answer.map((el) => el.split(",").map(Number));
//   return answer;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
