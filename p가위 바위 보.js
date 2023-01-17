const solution = (rsp) => {
  let answer = "";
  for (let i of rsp) {
    switch (i) {
      case "2":
        answer += "0";
        break;
      case "5":
        answer += "2";
        break;
      case "0":
        answer += "5";
        break;
    }
  }
  return answer;
};

console.log(solution("2"));
console.log(solution("205"));
