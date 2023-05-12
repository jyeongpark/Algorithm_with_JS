function solution(cacheSize, cities) {
  var answer = 0;
  let obj = [];
  cities.forEach((el) => {
    el = el.toUpperCase();
    const idx = obj.indexOf(el);
    if (idx !== -1) {
      answer += 1;
      obj.splice(idx, 1);
      obj.push(el);
    } else {
      answer += 5;
      obj.push(el);
      if (cacheSize < obj.length) {
        obj.shift();
      }
    }
  });
  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); //50

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); //21
