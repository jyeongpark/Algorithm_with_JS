const solution = (n) => {
  let sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? (sqrt + 1) * (sqrt + 1) : -1;
};

console.log(solution(121)); //144
console.log(solution(3)); //-1
