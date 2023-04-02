/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let answer = true;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      answer = obj1[s[i]] === t[i] ? true : false;
    } else if (obj2[t[i]]) {
      answer = obj2[t[i]] === s[i] ? true : false;
    } else {
      obj1[s[i]] = t[i];
      obj2[t[i]] = s[i];
    }
    if (!answer) {
      break;
    }
  }
  return answer;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
