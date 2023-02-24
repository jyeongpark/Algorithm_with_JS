const solution = (s) => {
  s = s.split("");
  if (
    (s.length === 4 || s.length === 6) &&
    s.every((el) => {
      return Number.isInteger(+el);
    })
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(solution("a234")); //false
console.log(solution("1234")); //true
