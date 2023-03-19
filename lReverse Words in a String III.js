/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");
  s = s.map((el) => el.split("").reverse().join(""));
  return s.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
