/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let index = answer.indexOf(s[i]);
    if (index === -1) {
      answer += s[i];
    } else {
      answer = answer.slice(index + 1);
      answer += s[i];
    }

    result = Math.max(result, answer.length);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
