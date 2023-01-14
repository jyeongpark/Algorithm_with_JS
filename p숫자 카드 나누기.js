const getA = (arr1, arr2) => {
  // 공약수 구하는 함수
  let min = arr1[0];
  for (let i = min; i > 0; i--) {
    if (arr1.every((el) => el % i === 0) && !arr2.some((el) => el % i === 0)) {
      return i;
    }
  }
  return 0;
};

const solution = (arrayA, arrayB) => {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  return Math.max(getA(arrayA, arrayB), getA(arrayB, arrayA));
};

console.log("a", solution([10, 17], [5, 20]));
console.log("a", solution([10, 20], [5, 17]));
console.log("a", solution([14, 35, 119], [18, 30, 102]));
console.log([true, false, false, false, false].includes(true));

// 시간초과
// const getCD = (arr) => {
//   //공약수 구하는 함수
//   let min = arr[0]
//   for (let i = min; i >= 0; i--) {
//     let isDivide = true;
//     arr.forEach((el) => {
//       if (el % i !== 0) {
//         isDivide = false;
//       }
//     });
//     if (isDivide) return i;
//   }
//   return 1;
// };
// const isInclude = (arr, num) => {
//   //상대 배열에 공약수가 있을까?
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % num === 0) {
//       return 1;
//     }
//   }
//   return num;
// };
// const solution = (arrayA, arrayB) => {
//   let a = getCD(arrayA);
//   let b = getCD(arrayB);
//   let getA = isInclude(arrayB, a);
//   let getB = isInclude(arrayA, b);
//   return getA === getB ? 0 : getA > getB ? getA : getB;
// };
