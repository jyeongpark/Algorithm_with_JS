const solution = (numbers) => {
  if (numbers.every((el) => el === 0)) {
    return "0";
  }
  let a = Array.from({ length: 10 }, () => []);
  for (let i of numbers) {
    a[i.toString()[0]].push(i.toString());
  }
  for (let i = 0; i <= 9; i++) {
    a[i].sort((a, b) => {
      return (b + a) * 1 - (a + b) * 1;
    });
    a[i] = a[i].join("");
  }

  return a.reverse().join("");
};

console.log(solution([6, 10, 2])); //6210
console.log(solution([3, 30, 34, 5, 9])); //9534330
console.log(solution([0, 0, 0]));

//짧은 방법 이렇게 문자열로 비교하는 방법도 있구나
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}
