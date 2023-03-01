const solution = (s, skip, index) => {
  let alpha = Array.from({ length: 26 }, (_, idx) =>
    String.fromCharCode(idx + 97)
  ).filter((el) => !skip.includes(el));

  return s
    .split("")
    .map((el) => alpha[(alpha.indexOf(el) + index) % alpha.length])
    .join("");
};
// const solution = (s, skip, index) => {
//   let alpha = Array.from({ length: 26 }, (_, idx) =>
//     String.fromCharCode(idx + 97)
//   );
//   for (let i of skip) {
//     alpha.splice(
//       alpha.findIndex((el) => el === i),
//       1
//     );
//   }
//   let answer = "";

//   for (let i of s) {
//     answer += alpha[(alpha.findIndex((el) => el === i) + index) % alpha.length];
//   }
//   return answer;
// };
console.log(solution("aukks", "wbqd", 5)); //"happy"
console.log(solution("xyz", "b", 20));
