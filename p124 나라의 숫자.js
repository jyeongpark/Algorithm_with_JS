const solution = (n) => {
  let answer = [];
  let world = { 1: 1, 2: 2, 0: 4 }; //124나라 숫자
  //나머지 연산으로 해서 계속 나머지로 계산 한 다음 마지막에 뒤집고 문자열로 만들기
  while (n > 0) {
    let rest = n % 3;
    answer.push(world[rest]);
    n = rest === 0 ? n / 3 - 1 : parseInt(n / 3);
  }
  return answer.reverse().join("");
};

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(10));
