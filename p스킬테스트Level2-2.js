function solution(elements) {
  //중복제거
  let setArr = new Set();

  for (let i = 0; i < elements.length; i++) {
    //시작점
    for (let j = 1; j <= elements.length; j++) {
      //몇개씩 더하냐
      let pre = [];
      if (i + j > elements.length) {
        //원형이 마지막인덱스를 넘을 경우
        let pre1 = elements.slice(i, elements.length + 1);
        let pre2 = elements.slice(0, i + j - elements.length);
        pre = [...pre1, ...pre2];
      } else {
        //인덱스 안에서 해결할 수 있는 경우
        pre = elements.slice(i, i + j);
      }

      //합
      let sumOfArr = pre.reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      //세트에 추가
      setArr.add(sumOfArr);
    }
  }

  return [...setArr].length;
}
console.log(solution([7, 9, 1, 1, 4]));
