const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => BigInt(el));

const [k, p, n] = input;
let answer = k;
let DEVIDE = BigInt(1000000007);
for (let i = 0; i < n; i++) {
  answer = (answer * p) % DEVIDE;
}

console.log(+answer.toString());

//BigInt에 대해서 알게 되었다.

//python
```
import sys

k, p, n = list(map(int,sys.stdin.readline().split()))

for i in range(n):
    k = (k * p) % 1000000007

print(k)
```;
