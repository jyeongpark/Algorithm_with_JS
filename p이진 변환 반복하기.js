const solution = (s) => {
  let answer = [0, 0];
  while (s !== "1") {
    let [zeroCount, changed] = returnZero(s);
    answer[0] += 1;
    answer[1] += zeroCount;
    s = changed;
  }
  return answer;
};
const returnZero = (s) => {
  let zeroCount = s.split("").filter((el) => el === "0").length;
  let changed = (s.split("").length - zeroCount).toString(2);
  return [zeroCount, changed];
};
console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
console.log(solution("1111111")); //[4,1]
