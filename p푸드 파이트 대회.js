const solution = (food) => {
  let answer = "";
  let foodList = [];
  food = food.map((el) => parseInt(el / 2));
  food.forEach((el, idx) => {
    for (let i = 0; i < el; i++) {
      foodList.push(idx);
    }
  });
  answer = [...foodList, 0, ...foodList.reverse()];
  return answer.join("");
};

console.log(solution([1, 3, 4, 6]));
