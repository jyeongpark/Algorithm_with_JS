const solution = (n, words) => {
  let wordObj = [];
  for (let idx = 0; idx < words.length; idx++) {
    let el = words[idx];
    if (wordObj.includes(el)) {
      // console.log("이미 나왔던");
      let personNum = (idx + 1) % n || n;
      let turn = Math.ceil((idx + 1) / n);
      return [personNum, turn];
    } else if (
      wordObj[0] &&
      wordObj[wordObj.length - 1].slice(-1) !== el.slice(0, 1)
    ) {
      // console.log("앞 끝이랑 맞지 않는");
      let personNum = (idx + 1) % n || n;
      let turn = Math.ceil((idx + 1) / n);
      return [personNum, turn];
    }
    wordObj.push(el);
  }
  return [0, 0];
};

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); //[3,3]
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); //[0,0]
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); //[1,3]
