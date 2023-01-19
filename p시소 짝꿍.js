function solution(weights) {
  var answer = 0;
  let w = {};
  weights.forEach((el) => {
    if (w[el]) w[el] += 1;
    else w[el] = 1;
  });
  let wKey = Object.keys(w);
  wKey.forEach((el) => {
    if (w[el] > 1) answer += (w[el] * (w[el] - 1)) / 2;
  });
  for (let i = 0; i < wKey.length - 1; i++) {
    for (let j = i + 1; j < wKey.length; j++) {
      if (find(wKey[i], wKey[j])) {
        let a = w[wKey[i]];
        let b = w[wKey[j]];
        answer += a * b;
      }
    }
  }
  return answer;
}

const find = (a, b) => {
  if (a === b || a * 4 === b * 2 || a * 4 === b * 3 || a * 3 === b * 2) {
    return true;
  } else {
    return false;
  }
};
