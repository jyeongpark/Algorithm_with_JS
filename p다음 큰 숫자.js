const solution = (n) => {
  let bit1 = find1(n);
  while (true) {
    n += 1;
    if (bit1 === find1(n)) {
      return n;
    }
  }
};

const find1 = (num) => {
  return num
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
};

console.log(solution(78)); //83
console.log(solution(15)); //23
