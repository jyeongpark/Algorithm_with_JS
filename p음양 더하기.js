const solution = (absolutes, signs) => {
  let answer = 0;
  signs.forEach((el, idx) =>
    el ? (answer += absolutes[idx]) : (answer -= absolutes[idx])
  );
  return answer;
};
