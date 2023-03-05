const solution = (today, terms, privacies) => {
  let answer = [];
  let [year, month, date] = today.split(".").map(Number); //숫자로 변경하여 변수에 할당
  let todayNumber = year * 12 * 28 + month * 28 + date;

  let termObj = {};
  terms.forEach((el) => {
    let [alpha, month] = el.split(" ");
    termObj[alpha] = Number(month);
  }); // 기간을 객체로

  privacies.forEach((el, idx) => {
    let [day, t] = el.split(" ");
    day = day.split(".").map(Number);
    let privacyNumber =
      day[0] * 12 * 28 + day[1] * 28 + day[2] + termObj[t] * 28; //날짜에 term 추가
    if (privacyNumber <= todayNumber) answer.push(idx + 1);
  });
  return answer;
};

// const solution = (today, terms, privacies) => {
//   let answer = [];

//   let expire = privacies.map((el) => {
//     let [dates, a] = el.split(" ");
//     let [year, month, date] = dates.split(".").map((el) => Number(el));
//     date = date - 1 === 0 ? 28 : date - 1;
//     month = date === 28 ? month + termObj[a] - 1 : month + termObj[a];
//     if (month > 12) {
//       year +=
//         month % 12 === 0 ? parseInt(month / 12) - 1 : parseInt(month / 12);
//       month = month % 12 === 0 ? 12 : month % 12;
//     }
//     return `${year}-${month}-${date}`;
//   });
//   expire.map((el, index) => {
//     let [eY, eM, eD] = el.split("-").map((e) => Number(e));
//     let [tY, tM, tD] = today.split(".").map((el) => Number(el));

//     if (eY < tY) {
//       answer.push(index + 1);
//     } else if (eY === tY && eM < tM) {
//       answer.push(index + 1);
//     } else if (eY === tY && eM === tM && eD < tD) {
//       answer.push(index + 1);
//     }
//   });
//   return answer;
// };

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
console.log(solution("2022.02.28", ["A 23"], ["2020.01.28 A"]));
