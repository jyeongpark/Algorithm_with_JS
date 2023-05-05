# Algorithm_with_JS

```js
let start = filename[0];
let codingTestSite;
let solutionTitle = filename.slice(1);
switch (start) {
  case "p":
    codingTestSite = "Programmers";
    break;
  case "l":
    codingTestSite = "Leetcode";
    break;
  case "b":
    codingTestSite = "Baekjoon";
    break;
  case "softeer":
    codingTestSite = "Softeer";
    break;
  default:
    break;
}

console.log(`${codingTestSite}로 ${solutionTitle} 해결`);
```
