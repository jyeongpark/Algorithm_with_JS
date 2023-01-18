function solution(data, col, row_begin, row_end) {
  var answer = 0;
  data = data.sort((a, b) => {
    // 각 항목의 col-1번째 index로 오름차순 정렬, 같으면 0번째 index로 내림차순 정렬
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });
  let s_i = []; // 정렬된 데이터에서 i번째 항목을 i로 각각 나눈 것
  for (let i = row_begin; i <= row_end; i++) {
    let pre = data[i - 1].map((el) => el % i).reduce((acc, cur) => acc + cur);
    s_i.push(pre);
  }
  answer = s_i[0];
  for (let i = 1; i < s_i.length; i++) {
    //xor:^(검색함)
    answer = answer ^ s_i[i];
  }
  return answer;
}
