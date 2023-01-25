class Heap {
  constructor() {
    this.heap = [null];
  }
  size() {
    //heap 사이즈 구하기
    return this.heap.length - 1;
  }
  getMin() {
    //제일 작은 값 구하기
    return this.heap[1] ? this.heap[1] : null;
  }
  swap(a, b) {
    //a,b 순서 바꾸기
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parIndex = (curIndex / 2) >> 0;
    while (curIndex > 1 && this.heap[parIndex] > this.heap[curIndex]) {
      this.swap(parIndex, curIndex);
      curIndex = parIndex;
      parIndex = (curIndex / 2) >> 0;
    }
  }
  pop() {
    const min = this.heap[0];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    let curIndex = 1;
    let leftIndex = curIndex * 2;
    let rightIndex = curIndex * 2 + 1;
    if (!this.heap[leftIndex]) return min;
    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[curIndex]) {
        this.swap(leftIndex, curIndex);
      }
      return min;
    }
    while (
      this.heap[leftIndex] < this.heap[curIndex] ||
      this.heap[rightIndex] < this.heap[curIndex]
    ) {
      const minIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(minIndex, curIndex);
      curIndex = minIndex;
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }
    return min;
  }
}
const solution = (n, k, enemy) => {
  let answer = 0;
  if (k >= enemy.length) return enemy.length;
  let heap = new Heap();
  for (let i = 0; i < k; i++) {
    // 힙 안에 작은걸 계속 넣어
    heap.push(enemy[i]);
    answer += 1;
  }
  for (let i = k; i < enemy.length; i++) {
    let min = heap.getMin();
    if (min < enemy[i]) {
      n -= min;
      heap.pop(min);
      heap.push(enemy[i]);
    } else {
      n -= enemy[i];
    }
    if (n >= 0) {
      answer++;
    } else {
      break;
    }
  }
  return answer;
};
