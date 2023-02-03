const solution = (n, left, right) => {
  //[x,y] 좌표는 Math.max(x+1,y+1)이 된다.
  //일차원배열로 바꾸기 계산
  return new Array(right - left + 1).fill(0).reduce((acc, _, idx) => {
    acc.push(Math.max((idx + left) % n, parseInt((idx + left) / n)) + 1);
    return acc;
  }, []);
};

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
