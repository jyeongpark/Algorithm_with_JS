const solution = (book_time) => {
  let newTime = book_time.map((el) => {
    el[0] = +el[0].split(":")[0] * 60 + +el[0].split(":")[1];
    el[1] = +el[1].split(":")[0] * 60 + +el[1].split(":")[1] + 10;
    return el;
  });
  newTime.sort((a, b) => a[0] - b[0]);
  let rooms = [newTime[0][1]];
  for (let i = 1; i < newTime.length; i++) {
    let rIdx = 0;
    while (true) {
      if (rIdx >= rooms.length) {
        rooms.push(newTime[i][1]);
        break;
      }
      if (rooms[rIdx] <= newTime[i][0]) {
        rooms[rIdx] = newTime[i][1];
        break;
      } else {
        rIdx++;
      }
    }
  }
  return rooms.length;
};
console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
); //3

console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
); //1

console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
); //3
