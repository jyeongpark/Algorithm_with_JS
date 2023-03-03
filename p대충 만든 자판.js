const solution = (keymap, targets) => {
  let obj = {};
  for (let key of keymap) {
    for (let idx = 0; idx < key.length; idx++) {
      k = key[idx];
      if (Object.keys(obj).includes(k)) {
        obj[k] = obj[k] < idx + 1 ? obj[k] : idx + 1;
      } else {
        obj[k] = idx + 1;
      }
    }
  }
  let answer = [];
  for (let t of targets) {
    let a = t.split("").reduce((acc, cur) => {
      if (obj[cur] && acc !== -1) {
        acc += obj[cur];
      } else {
        acc = -1;
      }
      return acc;
    }, 0);
    answer.push(a);
  }

  return answer;
};

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //[9,4]
console.log(solution(["AA"], ["B"])); //[-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); //[4,6]
