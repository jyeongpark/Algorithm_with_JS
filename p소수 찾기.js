const isPrime = () => {
  let answer = [2, 3];
  for (let i = 4; i < 9999999; i++) {
    if (i % 2 === 0) continue;
    let bool = true;
    let sqrt = parseInt(Math.sqrt(i));
    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) {
        bool = false;
        break;
      }
    }
    bool && answer.push(i);
  }
  return answer;
};
const solution = (numbers) => {
  let answer = 0;

  let primeArr = isPrime();
  let a = [];
  let visited = Array.from({ length: numbers.length }, () => false);
  // let visited =  Array(numbers.length).fill(false)
  const dfs = (arr, num) => {
    if (!a.includes(num)) {
      a.push(num);
      primeArr.includes(num) && answer++;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(arr, +(num + "" + arr[i]));
        visited[i] = false;
      }
    }
  };
  dfs(numbers.split(""), "");
  return answer;
};

console.log(solution("17")); //3
console.log(solution("011")); //2
